import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import  todoRoutes from "./routes/todoRoutes.js"
import cors from "cors";

const app = express();
const PORT = 3000;

connectDB()
app.use(express.json())
app.use(cors())


app.use("/api/auth",authRoutes)
app.use("/api/todos",todoRoutes)
app.listen(PORT,()=>  console.log("server is started"))