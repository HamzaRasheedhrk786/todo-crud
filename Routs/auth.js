const Router= require('express').Router();

// defining routes || middleware

Router.use("/todo",require("../API/Todo/auth"))

module.exports=Router;