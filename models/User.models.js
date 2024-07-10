const { type } = require("express/lib/response")
const{Schema, model}=require("mongoose")

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        minlength: 8,
    },
    image:{
        type:String,
        default:"",
    },
    age:{
        type:Number,
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number,
    },
    gender:{
        type:String,
        enum:["male,female,other"],
    },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Users who follow this user
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }]  // Users this user follows
})

const User = model("User", userSchema);
module.exports = User;