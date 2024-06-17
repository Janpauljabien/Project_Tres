import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 11,
    },
    contact: {
        type: String,
        required: true,
        minlength: 11
    },
    colleges: {
        type: [String],
        default: ["COE","CAS","CIT","CEA"]
    }
    
    
});

const User = mongoose.model("User", userSchema);//this states that where aliasing userSchema into User

export default User;//exporting userSchema hiding inside the User