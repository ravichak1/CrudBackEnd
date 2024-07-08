const router = require("express").Router();
const isAuth=require("./../middleware/isAuthenticated")

const {createNutrients}=require("./../controller/nutrientsController/createNutrients")
const {deleteNutrients}=require("./../controller/nutrientsController/deleteNutrients")
const {getNutrients}=require("./../controller/nutrientsController/getNutrients")
const {updateNutrients}=require("./../controller/nutrientsController/updateNutrients")

router.route("/:username/nutrients/:id").get(getNutrients)


module.exports=router