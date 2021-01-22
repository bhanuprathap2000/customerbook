const express=require("express");
const dotenv=require('dotenv');
const morgan=require("morgan");
const bodyParser=require("body-parser");
const MainRoutes=require("./server/routes/mainroutes");
const connectionDB=require("./server/database/connection");
//creating the express app.
const app=express();
//setting the view engine
app.set("view engine","ejs");
connectionDB();
//we can set view engine to any other view engine but i choose ejs.

//So the code inside the app.use() will run for any particular type of request from the client.
//middleware for parsing the incoming requests
app.use(express.json())
app.use(express.urlencoded({extended:true}));


//middleware for servicing the static files.

app.use(express.static("public"));

app.use(MainRoutes);



// //instead of hardcoding the port number we can get the port whichever is free.
//we will keep all the secerts in the config.env
//here we are configuring the enviornment file and specifying the path so that we can use them.
dotenv.config({path:"config.env"});
const PORT=process.env.PORT || 8000;

// //configure the bodyparser
// app.use(bodyParser.urlencoded({extended:true}));

// app.use(morgan("tiny"));
// //set the view engine.
// app.set("view engine","ejs");





app.listen(PORT,()=>{console.log(`server started at port 3000.`);
console.log(`http://localhost:${3000}`);

});

app.use(
     (req,res)=>{

        
        res.status(404);
        res.send("File not found");

     }

);