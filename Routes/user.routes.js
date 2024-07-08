const router = require("express").Router();
const isAuth=require("./../middleware/isAuthenticated")
const {signUp} = require("../controller/userController/signUp")
const {login} = require("../controller/userController/login")
const {getUser} = require("../controller/userController/getUser")
const {updateUser} = require("../controller/userController/updateUser")
const {deleteUser} = require("../controller/userController/deleteUser")

router.route("/signup").post(signUp)

router.route("/login").post(login)

router.route("/user/:id").get(isAuth,getUser)
router.route("/user/:id").put(isAuth,updateUser)
router.route("/user/:id").delete(isAuth,deleteUser)



module.exports=router