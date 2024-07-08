//description update user
//route  PUT api/users/:id
//access private
const User=require('./../../models/User.models')

async function updateUser(req,res){
    try {
        const id = req.params
        
        const {height,image,weight,age}= req.body

        const updateUser = await User.findOneAndUpdate({_id:id},{image,weight,height,age},{new:true})
        res.json(updateUser)
        
    } catch (error) {
        
    }
}

module.exports = {updateUser}