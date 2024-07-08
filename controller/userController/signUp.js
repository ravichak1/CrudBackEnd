//description GET all users
//route  GET api/users
//access public
const User=require('../../models/User.models')
const bcrypt=require("bcryptjs")
const SALT=12
async function signUp(req,res){
    try {
        const {name,username,email,password,image,age,height,weight,gender}=req.body

        if(!name||!username||!email||!password){
            res.jsn({message:"All fields are mandatory"})
        }

        const foundUser= await User.findOne({$or: [{ username: username }, { email: email }]})

        if(foundUser){
            return res.json({message:"Already taken"})
        }
        const hashedPassword = await bcrypt.hash(password, SALT);

        const createdUser = await User.create({
            name,
            username,
            password: hashedPassword,
            email,
            image,
            age,
            weight,
            height,
        });

        res.status(201).json({
        message: `Created user ${createdUser.username} with id ${createdUser._id}`,
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {signUp}