const mongoose=require("mongoose");

const customerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unquie:true
    },
    gender:String,
    status:String
});

module.exports=mongoose.model("customer",customerSchema)