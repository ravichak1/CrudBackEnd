//description cretaeActivity user
//route  POST api/users/workouts//id
//access private
const Activity = require("./../../models/Activity.models");
const User = require("./../../models/User.models");
const axios = require("axios");

async function createActivity(req, res,next) {
  try {
    const username = req.params.username;
    const { type, duration, sets, reps, distance, calories } = req.body;
    console.log(username);

    // Find the user by username
    const findUser = await User.findOne({ username: username });
    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const id = findUser._id;

    let weight = (findUser.weight * 2.205).toFixed(2);
    if (weight == "NaN") {
      weight = 137;
    }
    console.log(weight);

    // Fetch calories burned data from API
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/caloriesburned?activity=${type}&weight=${weight}&duration=${duration}`,
      {
        headers: { "X-Api-Key": process.env.API_NINJAS_KEY },
      }
    );

    // If API does not return data, use the provided calories
    let activityData;
    if (response.data.length === 0) {
      activityData = {
        name: type,
        duration_minutes: duration,
        total_calories: calories,
        sets: sets,
        reps: reps,
        distance: distance,
      };
    } else {
      activityData = response.data[0];
    }

    // Create and save the new activity
    const newActivity = new Activity({
      user: id,
      type: activityData.name,
      duration: activityData.duration_minutes,
      sets,
      reps,
      distance,
      calories: activityData.total_calories,
    });

    await newActivity.save();
    console.log(newActivity);
    res.json({ message: "Activity created", activity: newActivity });
  } catch (error) {
    next(error)
  }
}

module.exports = { createActivity };
