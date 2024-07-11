const Activity = require("./../../models/Activity.models");
const User = require("./../../models/User.models");

async function getActivity(req, res,next) {
    try {
        const { username } = req.params;
        console.log(username);

        // Find the user by username
        const findUser = await User.findOne({ _id: username });
        console.log(findUser);

        if (!findUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find activities for the user and populate the user field
        const findActivity = await Activity.find({ user: findUser._id }).populate("user");
        console.log(findActivity);

        res.json(findActivity);
    } catch (error) {
        next(error)
    }
}

module.exports = { getActivity };
