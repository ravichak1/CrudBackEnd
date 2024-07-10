const router = require("express").Router();
const isAuth = require("./../middleware/isAuthenticated");
const { signUp } = require("../controller/userController/signUp");
const { login } = require("../controller/userController/login");
const { getUser } = require("../controller/userController/getUser");
const { updateUser } = require("../controller/userController/updateUser");
const { deleteUser } = require("../controller/userController/deleteUser");
const {getAllUser}= require("./../controller/userController/getAllUser")
const {followUser, unfollowUser} = require("./../controller/userController/followerController")
const fileUploader = require("./../config/cloudinaryConfig");


router.route("/signup").post(fileUploader.single("image"), signUp);

router.route("/login").post(login);

router.route("/user/:id").get(isAuth, getUser);
router.route("/users").get(isAuth, getAllUser);
router.route("/:userID/follow/:id").post(isAuth,followUser)
router.route("/unfollow/:id").post(isAuth,unfollowUser)
router.route("/user/:id").put(isAuth, updateUser);
router.route("/user/:id").delete(isAuth, deleteUser);

module.exports = router;
