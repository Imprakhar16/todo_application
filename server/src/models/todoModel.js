import mongoose, { Mongoose } from "mongoose"

const todoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    isCompleted:{type:Boolean,default:false},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'Auth',required:true},
},{timestamps:true})

const Todos =  mongoose.model("Todos",todoSchema);

export default Todos