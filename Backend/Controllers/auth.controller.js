import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";


export const newAccount = async(req,res) => {
    try {
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullname,
            username,
            email,
            password: hashedPassword
        });

        if(newUser){
        }else{

        }
    } catch (error) {
        
    }
};
export const login = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
};

export const logout = async(req,res) =>{

};