//description deleteActivity user
//route  DELETE api/user/delete/id
//access private
const Activity=require("./../../models/Activity.models")
const User=require("./../../models/User.models")

async function deleteActivity(req,res){
    try {
        const {username, id}=req.params
        const removeActivity=await Activity.findOneAndDelete({_id:id})
        console.log(id)
        res.json({message:"deleted activity"})
    } catch (error) {
        console.log(error)
    }
}

module.exports={deleteActivity}