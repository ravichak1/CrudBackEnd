// controllers/userController.js
const User = require('./../../models/User.models');

async function followUser(req, res) {
    const userId = req.params.userID;
    const followUserId = req.params.id;
    console.log(userId)
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
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function unfollowUser(req, res) {
    const userId = req.user._id;
    const unfollowUserId = req.params.id;

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
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { followUser, unfollowUser };
