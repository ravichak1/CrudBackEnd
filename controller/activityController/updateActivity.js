//description updateActivity user
//route  PUT api/users/workouts/id
//access private
const Activity=require("./../../models/Activity.models")
const User=require("./../../models/User.models")

async function updateActivity(req,res,next){
    try {
       const {id}=req.params
       const{type,duration,sets,reps,distance,calories}=req.body
        console.log(id)
       const updatActivity=await Activity.findOneAndUpdate({_id:id},{type,duration,distance,sets,reps},{new:true})
       console.log(updateActivity)
       res.json(updateActivity)
    } catch (error) {
        next(error)
    }
}

module.exports={updateActivity}