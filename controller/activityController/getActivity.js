//description getActivity user
//route  GET api/users/workouts/id
//access private
const Activity=require("./../../models/Activity.models")
const User=require("./../../models/User.models")

async function getActivity(req,res){
    try {
       const {id}=req.params
       console.log(id)
       const findActivity=await Activity.findById(id).populate("user")
       console.log(findActivity)
       res.json(findActivity)
    } catch (error) {
        console.log(error)
    }
}

module.exports={getActivity}