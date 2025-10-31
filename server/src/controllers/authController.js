import jwt from "jsonwebtoken"
import Auth from "../models/authModel.js"
import dotenv from "dotenv"
dotenv.config();

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET, { expiresIn: "1h" })
}

export const registerUser = async (req,res)=>{
     try {
         const {name,email,password} = req.body;

         const existingUser = await Auth.findOne({email})
         if(existingUser) return  res.status(400).json({ message: "User already exists" });

         const user = await Auth.create({name,email,password})
         res.status(201).json({
            user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            },
            message:"user registered successfully"
         })
     } catch (error) {
        res.status(500).json({ message: error.message });
     }
}

export const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await Auth.findOne({email});
        if(!user) return res.status(400).json({message :"Invalid Credentials"})

        const isMatch = await user.comparePassword(password)
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