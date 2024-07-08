//description delete user
//route  DELETE api/users/:id
//access private
const User=require('./../../models/User.models')

async function deleteUser(req,res){
    try {
        const id=req.params
        const deleteuser= await User.findOneAndDelete({_id:id})
        res.json({message:"user deleted"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {deleteUser}