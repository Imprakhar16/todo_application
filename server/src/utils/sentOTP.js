import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendOTP = async ({ email, subject, body }) => {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_APP_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: subject,
      html: body,
    };

   
    await transporter.sendMail(mailOptions);
    return { success: true, message: "OTP sent successfully" };
  } catch (error) {
    console.error("Error sending OTP:", error);
    return { success: false, message: "Failed to send OTP", error };
  }
};

export default sendOTP;
