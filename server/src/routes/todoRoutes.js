import express from "express"
import authMiddleware from "../middlewares/authMiddleware.js";
import { createTodo, getAllTodos } from "../controllers/todoControllers.js";

const router = express.Router();

router.post("/createTodo",authMiddleware,createTodo)
router.get("/todos",authMiddleware,getAllTodos)

export default router;