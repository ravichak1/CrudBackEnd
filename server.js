//dotenv configuration defined
require("dotenv").config()
//mongodb url connection
require("./config/dbConnection")
//externeal middleware and express define
const express = require("express")
const morgan= require("morgan")
const path= require("path");
const cors=require("cors")
const errorHandler = require("./middleware/errorHandler");
//port description
const PORT=process.env.PORT || 5005;
//app creation 
const app=express()


//Middlewares
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(cors())
app.use(errorHandler)
//routes definition
app.use("/",require("./Routes/user.routes"))
app.use("/api",require("./Routes/activity.routes"))
app.use("/api",require("./Routes/nutrients.routes"))

app.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

//app listen
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})