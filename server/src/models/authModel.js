import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const authSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password:{ type: String, required: true },
});


authSchema.pre("save",async function (next) {
  
    if(!this.isModified("password")) return next()

    try {
        const salt = await bcrypt.genSalt(10); 
        this.password = await bcrypt.hash(this.password,salt)
        next();
    } catch (error) {
        next(error)
    }
})

authSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

const Auth = mongoose.model("Auth",authSchema)
export default Auth