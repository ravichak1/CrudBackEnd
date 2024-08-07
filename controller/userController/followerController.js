// controllers/userController.js
const User = require('./../../models/User.models');

async function followUser(req, res, next) {
    const username = req.user.username;
    const followusername = req.params.followusername;
    const follow=await User.find({username:followusername})
    const user=await User.find({username:username})
    const followUserId = follow[0]._id
    const userId = user[0]._id
    if (userId === followUserId) {
        return res.status(400).json({ error: "You cannot follow yourself" });
    }

    try {
        // Add the user to the following list
        await User.findByIdAndUpdate(userId, {
            $addToSet: { following: followUserId }
        });

        // Add the user to the followers list of the other user
        await User.findByIdAndUpdate(followUserId, {
            $addToSet: { followers: userId }
        });

        res.status(200).json({ message: 'Successfully followed user' });
    } catch (error) {
        next(error)
    }
}

async function unfollowUser(req, res,next) {
    const username = req.user.username;
    const unfollowusername = req.params.unfollowusername;

    if (userId === unfollowUserId) {
        return res.status(400).json({ error: "You cannot unfollow yourself" });
    }

    try {
        // Remove the user from the following list
        await User.findByIdAndUpdate(userId, {
            $pull: { following: unfollowUserId }
        });

        // Remove the user from the followers list of the other user
        await User.findByIdAndUpdate(unfollowUserId, {
            $pull: { followers: userId }
        });

        res.status(200).json({ message: 'Successfully unfollowed user' });
    } catch (error) {
        next(error)
    }
}

module.exports = { followUser, unfollowUser };
