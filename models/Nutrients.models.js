const { type } = require("express/lib/response")
const{Schema,model, SchemaType, SchemaTypes}=require("mongoose")

const nutrientsSchema= new Schema({
    user:{
        type:SchemaTypes.ObjectId
    },
    mealtype:{
        type:String,
        required:true,
    },
    fooditem:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    calries:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true })

const Nutrient = model("Nutrient", nutrientsSchema);
module.exports = Nutrient;