import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async ()=>{
    try {
        const conn  = mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

export default connectDB;