const Activity = require("./../../models/Activity.models");
const User = require("./../../models/User.models");

async function oneActivity(req, res,next) {
    try {
        const { username,id } = req.params;
        console.log(id);

        const findActivity = await Activity.findById(id)
        res.json(findActivity)
    }catch(error){
        next(error)
    }
        
}

module.exports = { oneActivity };
