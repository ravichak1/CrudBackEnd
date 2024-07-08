const { type } = require("express/lib/response")
const{Schema,model, SchemaType, SchemaTypes}=require("mongoose")

const activitySchema= new Schema({
    user:{
        type:SchemaTypes.ObjectId,
        ref:'User',
    },
    type:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
        default:1
    },
    sets:{
        type:Number,
    },
    reps:{
        type:Number
    },
    distance:{
        type:Number,
    },
    calories:{
        type:Number,
   
    },
    date:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true })

const Activity = model("Activity", activitySchema);
module.exports = Activity;