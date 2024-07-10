

const User= require("./../../models/User.models")

async function getAllUser(req,res){
    try{
        const users= await User.find()
        res.status(201).json({users:users})
    }catch(error){
        console.log(error)
    }
}

module.exports={getAllUser}