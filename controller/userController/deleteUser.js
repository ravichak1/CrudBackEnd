//description delete user
//route  DELETE api/users/:id
//access private
const User = require("./../../models/User.models");
const Activity = require("./../../models/Activity.models");
async function deleteUser(req, res,next) {
  try {
    const id = req.params.id;
    console.log(id);

    const deleteuser = await User.findOneAndDelete({ _id: id });
    const deleteActivity = await Activity.findOneAndDelete({ user: id });
    res.json({ message: "user deleted" });
  } catch (error) {
    next(error)
  }
}

module.exports = { deleteUser };
