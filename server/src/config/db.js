import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        const conn  = mongoose.connect("mongodb://localhost:27017/demo");
        console.log(`MongoDB Connected: ${conn.connection}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

export default connectDB;