const axios =require("axios");


module.exports.homeRoute=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(result=>{
        console.log("Home page.")
        //result is the array of objects in the we need to use the data section.
        // console.log(result);
        res.render("index",{users:result.data});
    })
    .catch(err=>{
        console.log(err);
    });

    
}


module.exports.addUser=(req,res,next)=>{

    res.render("add_user");
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}