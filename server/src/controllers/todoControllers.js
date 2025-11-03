import Todos from "../models/todoModel.js";

export const getAllTodos = async(req,res)=>{
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page-1)*10;
       
         const todos = await Todos.find({user:req.user}).skip(skip).limit(limit)
         const total = todos.length
         res.status(200).json({todos:todos,message:"todos fetched successfully",totalPages:Math.ceil(total/limit),totalTodos:total});
    } catch (error) {
         res.status(500).json({message:error.message || "Internal server error"})
    }
}

export const createTodo = async(req,res)=>{
    try {
        const {title,description,isCompleted} = req.body;
       const savedTodo =  await Todos.create({title,description,isCompleted,user:req.user})
       
       res.status(201).json(savedTodo)
    } catch (error) {
        res.status(500).json({ message: "Failed to create todo", error: error.message });
    }   
}