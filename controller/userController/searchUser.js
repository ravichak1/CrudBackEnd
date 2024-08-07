// src/controllers/userController.js
const User = require("./../../models/User.models");

// Search users by name or other criteria
async function searchUsers(req, res,next) {
  try {
    const query = req.query.name || ""; // Use query parameter for search
    const users = await User.find({
      name: { $regex: query, $options: "i" } // Case-insensitive search
    }).limit(10); // Limit results for better performance
    res.status(200).json({ users });
  } catch (error) {
    next(error)
  }
}



module.exports = { searchUsers };
