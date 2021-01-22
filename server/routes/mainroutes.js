const express=require("express");
const router=express.Router();
const render=require("../services/render");
const controller=require("../controller/controller");
//home route and add user
router.route("/")
.get(render.homeRoute);

router.route("/add_user")
.get(render.addUser);

router.route("/update_user")
.get(render.update_user);
//api calls
router.route("/api/users")
.get(controller.find)
.post(controller.create);

router.route("/api/users/:id")
.put(controller.update)
.delete(controller.delete);

module.exports=router;

//when we make our custom modules we need to export them so that we can use them outside of the module.
