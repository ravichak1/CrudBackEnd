const User = require('./../../models/User.models');
const Activity = require('./../../models/Activity.models');

async function getUser(req, res, next) {
    try {
        const { id } = req.params;
        console.log(`Fetching user with ID: ${id}`);

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const currentDate = new Date();
        const startDay = new Date(currentDate.setHours(0, 0, 0, 0));
        const endDay = new Date(currentDate.setHours(24, 0, 0, 0));

        const totalCalories = await Activity.aggregate([
            { $match: { user: user._id, date: { $gte: startDay, $lt: endDay } } },
            { $group: { _id: user._id, totalCaloriesBurnt: { $sum: "$calories" }, workoutList: { $push: "$type" } } }
        ]);

        const totalCaloriesBurnt = totalCalories.length > 0 ? totalCalories[0].totalCaloriesBurnt : 0;
        const workoutList = totalCalories.length > 0 ? totalCalories[0].workoutList : [];
        const totalWorkouts = await Activity.countDocuments({ user: user._id, date: { $gte: startDay, $lt: endDay } });

        console.log(`Total workouts: ${totalWorkouts}, Total calories burnt: ${totalCaloriesBurnt}`);

        res.json({ user, totalCaloriesBurnt, totalWorkouts, workoutList });
    } catch (error) {
        next(error)
    }
}

module.exports = { getUser };
