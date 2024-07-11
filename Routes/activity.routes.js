const router = require("express").Router();
const isAuth=require("./../middleware/isAuthenticated")

const {createActivity}=require("./../controller/activityController/cretaeActivity")
const {deleteActivity}=require("./../controller/activityController/deleteActivity")
const {getActivity}=require("./../controller/activityController/getActivity")
const {updateActivity}=require("./../controller/activityController/updateActivity")
const {oneActivity} = require("./../controller/activityController/oneActivity")
router.route("/:username/create").post(isAuth,createActivity)

router.route("/:username/delete/:id").delete(isAuth,deleteActivity)
router.route("/:username/activity/").get(isAuth,getActivity)
router.route("/:username/oneactivity/:id").get(isAuth,oneActivity)
router.route("/:username/activity/:id").put(isAuth,updateActivity)
module.exports=router