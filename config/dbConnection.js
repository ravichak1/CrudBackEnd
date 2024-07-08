const mongoose= require("mongoose")

mongoose
.connect(process.env.MONGO_DB_URL)
.then((db) => console.log(`DB connected: ${db.connection.name}`))
.catch((e) => console.log(e));