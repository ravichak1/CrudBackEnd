//description update user
//route  PUT api/users/:id
//access private
const User=require('./../../models/User.models')

async function editImage(req,res){
    try {
        const {id} = req.params
        const image=req.file.path
        const {height,weight,age}= req.body
        console.log(height)
        const updateUser = await User.findOneAndUpdate({_id:id},{image,weight,height,age},{new:true})
        res.json(updateUser)
        console.log(updateUser)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {editImage}