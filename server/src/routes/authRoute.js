import express from "express"
import { loginUser, registerUser, resendOTP, verifyUser } from "../controllers/authController.js";


const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser)
router.post("/verify-user",verifyUser)
router.post("/resend-otp",resendOTP)

export default router