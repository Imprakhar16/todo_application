import Todos from "../models/todoModel.js";

export const getAllTodos = async(req,res)=>{
    try {
         const todos = await Todos.find({user:req.user});
         res.status(200).json({todos:todos,message:"todos fetched successfully"});
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