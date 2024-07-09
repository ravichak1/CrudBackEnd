//description Create user
//route  POST api/users
//access public
const User = require("../../models/User.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const foundUser = await User.findOne({ username: username });
    if (!foundUser) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const correctPassword = bcrypt.compare(password, foundUser.password);
    if (!correctPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const payload = { id: foundUser._id };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
      algorithm: "HS256",
    });

    res.json({
      accesstoken: token,
      userId: foundUser._id,
      userName: foundUser.username,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "havent found" });
  }
}

module.exports = { login };
