// src/controllers/userController.js
const User = require("./../../models/User.models");

async function getEachUser(req,res,next) {
  const username = req.params.username
  console.log(username);
  try {
    const response = await User.find({username}); // Ensure the field matches your schema
    if (response) {
      res.json({ user: response });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error)
  }
}

module.exports = { getEachUser };
