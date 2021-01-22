const customers=require("../model/models");

//This is resposible for rest operations
//we are follwing the mvc

exports.create=(req,res)=>
{

    if(!req.body){
        res.send("You cannot submit the empty data");
        return
    }
    
    //new user

    const user= new customers({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    });

    user.save()
    .then((result)=>{
        console.log("Saved sucessfully");
        // res.send(result);
        res.redirect("/");

    })
    .catch(err=>{
   res.status(500).send({msg:err.message || "something wrong happended during the creation." })
    })


}

//get request
exports.find=(req,res)=>
{
    if(req.query.id)
    {
    const id=req.query.id;
    customers.findById(id)
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>{
        res.status(500).send("there was a err at server side "+err)
    })
}

    else
    {

     customers.find()
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>{
        res.status(500).send("there was a err at server side "+err)
    })

    }
    


}

exports.update=(req,res)=>
{

    if(!req.body)
    {
       return  res.status(400).send("Empty Data Submitted");
    }
    
    // const id=req.parmas.id
    // console.log(id);

    console.log(req.params.id);
    console.log(req.body);
    
    customers.findByIdAndUpdate(req.params.id,req.body,{useFindAndModify:false})
    .then((result)=>{
        if(!result)
        {
            res.send("May be user not found.")
        }
        else{
            res.send(result);
        }
        
    })
    .catch(err=>{
        res.staus(500).send("there was a err at server side"+err);
    })
    
}

exports.delete=(req,res)=>
{
    const id = req.params.id;
    console.log(id);

   

    customers.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}


//there are two types of paramaters

//url and query 
//query parameters can only used using the get request 
//for others we need to use the express url varables.


//so we made the api restfull like this
/*
for getting all customers we choose this route /api/users/ we get all the routes

for getting one particular route we have choosen the query parameter which is passes during the request like this ?q=value


for creating a customer we have created a route /api/users post and it will accept a user form and stores the data


for updating a document we have use the id of document and passes as the url parameter

for deleting a document we have use the id of document and passes as the url parameter


*/