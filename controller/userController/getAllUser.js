

const User= require("./../../models/User.models")
const Activity=require("./../../models/Activity.models")
async function getAllUser(req,res){
    try{
        const user= await User.find({})
        const activity= await Activity.find().populate("user")
       console.log(activity, user)
        res.status(201).json({activities:activity,users:user})
    }catch(error){
        console.log(error)
    }
}

module.exports={getAllUser}