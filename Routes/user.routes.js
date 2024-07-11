const router = require("express").Router();
const isAuth = require("./../middleware/isAuthenticated");
const { signUp } = require("../controller/userController/signUp");
const { login } = require("../controller/userController/login");
const { getUser } = require("../controller/userController/getUser");
const { updateUser } = require("../controller/userController/updateUser");
const { deleteUser } = require("../controller/userController/deleteUser");
const {getAllUser}= require("./../controller/userController/getAllUser")
const {followUser, unfollowUser} = require("./../controller/userController/followerController")
const {searchUsers} = require("./../controller/userController/searchUser")
const {getEachUser} = require("./../controller/userController/findUser")
const fileUploader = require("./../config/cloudinaryConfig");


router.route("/signup").post(fileUploader.single("image"), signUp);

router.route("/login").post(login);

router.route("/user/:id").get(isAuth, getUser);
router.route("/users").get(isAuth, getAllUser);
router.route("/follow/:followusername").post(isAuth,followUser)
router.route("/search").get(isAuth,searchUsers)
router.route("/users/:username").get(isAuth,getEachUser)
router.route("/unfollow/:unfollowusername").post(isAuth,unfollowUser)
router.route("/user/:id").put(isAuth,fileUploader.single("image"), updateUser);
router.route("/user/:id").delete(isAuth, deleteUser);

module.exports = router;
