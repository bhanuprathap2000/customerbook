const mongoose=require("mongoose");
const MongoUri=require("../keys");
const connectionDB= async()=>{

    try {
        const connection=await mongoose.connect(MongoUri.mongouri,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("connection sucessful");

        
    } catch (error) {
        console.log("Not abe to connect to the mongodb")
        // console.log(error);

        
    }



}

module.exports=connectionDB;


//look if we don't handle the error our app crashes and hence we need to use the try and catch 

// it's like we will write code inside the try and if it runs sucessfully no problem 
//but if it causes any error we will handle it through catch(error);