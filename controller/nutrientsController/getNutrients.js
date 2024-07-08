//description getNutrients user
//route  GET api/users/nutrients/id
//access private
const Nutrients=require("./../../models/Nutrients.models")
const User=require("./../../models/User.models")

async function getNutrients(req,res){
    try {
       const {id}=req.params
       console.log(id)
       const findNutrients=await Nutrients.findById(id).populate("user")
       console.log(findNutrients)
       res.json(findNutrients)
    } catch (error) {
        console.log(error)
    }
}

module.exports={getNutrients}