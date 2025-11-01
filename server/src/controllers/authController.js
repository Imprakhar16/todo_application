import jwt from "jsonwebtoken"
import Auth from "../models/authModel.js"
import dotenv from "dotenv"
import sendOTP from "../utils/sentOTP.js";
import bcrypt from "bcryptjs"
import crypto from 'crypto'
dotenv.config();

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET, { expiresIn: "1h" })
}

const generateOTP = ()=>{
    return crypto.randomInt(100000, 999999).toString();
}

const createOTPtoken = (email,otp)=>{
    return jwt.sign({email,otp,exp:Math.floor(Date.now() / 1000) + (10 * 60)},process.env.JWT_SECRET)
}

export const registerUser = async (req,res)=>{
     try {
         const {name,email,password} = req.body;

         const existingUser = await Auth.findOne({email})
         if(existingUser) return  res.status(400).json({ message: "User already exists" });
         const hashedPassword = await bcrypt.hash(password,10)
         const user = await Auth.create({name,email,password:hashedPassword})
        const otp =  generateOTP()
    console.log(otp)
         let otpResponse = sendOTP({
            email:user.email,
            subject:"OTP for verify user",
            body: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
              <h2>Welcome ${name}!</h2>
              <p>Thank you for registering. Please use the following OTP to verify your email:</p>
              <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px;">
                ${otp}
              </div>
              <p>This OTP will expire in 10 minutes.</p>
              <p>If you didn't request this, please ignore this email.</p>
            </div>
          `
         })

         const otpToken =  createOTPtoken(email,otp)
         res.status(201).json({
            userDetails:{
            _id:user._id,
            name:user.name,
            email:user.email,
            },
            otpToken:otpToken,
            message:"'Registration successful! Please check your email for OTP'"
         })
     } catch (error) {
        res.status(500).json({ message: error.message });
     }
}

export const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await Auth.findOne({email});
        if(!user) return res.status(400).json({message :"Please Regiter Yourself"})
if(!user.isVerified){
    return res.status(400).json({message:"Please Verify Your Email First"})
}
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({message :"Invalid Credentials"})

        res.json({
            loggedinUser:{
                id:user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)
            },
            message:"User Loggedin Successfully"
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const verifyUser = async (req, res) => {
    try {
      const { otpToken, otp } = req.body;

      if (!otpToken || !otp) {
        return res.status(400).json({ message: 'OTP token and OTP are required' });
      }

      let decoded;
      try {
        decoded = jwt.verify(otpToken,process.env.JWT_SECRET)
      } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(400).json({ message: 'OTP has expired. Please request a new one' });
          }
          return res.status(400).json({ message: 'Invalid OTP token' });
      }

      if(decoded.otp !== otp){
        return res.status(400).json({ message: 'Invalid OTP' });
      }
      const user = await Auth.findOne({ email:decoded.email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
  
      if (user.isVerified) {
        return res.status(400).json({ message: 'Email already verified' });
      }
  
   
        user.isVerified = true;
        await user.save();
        res.status(200).json({
          message: 'Email verified successfully! You can now login',
          isVerified: true
        });
      
    
    } catch (error) {
      res.status(500).json({ message: "server error during verification" });
    }
  };
  
  export const resendOTP = async (req, res) => {
    try {
        const { email } = req.body;

      
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

      

  
        const user = await Auth.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

    
        if (user.isVerified) {
            return res.status(400).json({
                message: "Email already verified. You can login now.",
                isVerified: true
            });
        }

 
        const otp = generateOTP();
      

   
        try {
            await sendOTP({
                email: user.email,
                subject: "New OTP - Verify Your Email",
                body: `
                    <div style="font-family: Arial, sans-serif; padding: 20px;">
                        <h2>Hello ${user.name}!</h2>
                        <p>You requested a new OTP. Please use the following code to verify your email:</p>
                        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px;">
                            ${otp}
                        </div>
                        <p>This OTP will expire in 10 minutes.</p>
                        <p>If you didn't request this, please ignore this email.</p>
                    </div>
                `
            });
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            return res.status(500).json({ message: "Failed to send verification email. Please try again." });
        }

        
        const otpToken = createOTPtoken(user.email, otp);

        res.status(200).json({
            message: "New OTP sent to your email",
            otpToken: otpToken
        });

    } catch (error) {
        console.error('Resend OTP error:', error);
        res.status(500).json({ message: "Server error" });
    }
}