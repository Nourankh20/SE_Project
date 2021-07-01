import  mongoose  from 'mongoose';
const userSchema =  mongoose.Schema({
    name: {
        type: String,
        required: [true , "please enter your name!"],
        trim:true
    },
    
    password: {
        type: String,
        required: [true , "please enter your password!"]
    },
    role: {
        type: Number,
        default: 0
    },
    Faculty: {
        type: String,
        required: [true , "please enter your Faculty!"],
        trim:true
    }
    
}, {
    timestamps:true
})
const Users = mongoose.model('Users' , userSchema);

export default Users;



