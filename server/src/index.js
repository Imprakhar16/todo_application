import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
const app = express();
const PORT = 3000;

connectDB()
app.use(express.json())

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>  console.log("server is started"))