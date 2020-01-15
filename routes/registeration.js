const express = require('express');
const jwt = require('jsonwebtoken')
const register = express.Router();
const registerDb = require("../Model/registerDb");
register.use(express.json())

register.post("/registeration",(req,res)=>{
   var userDetail = {
       "username": req.body.username,
       "email": req.body.email,
       "password": req.body.password
   }
   let Response = registerDb.insertData(userDetail)
   Response.then((data)=>{
    let token = jwt.sign({"user":data},"Anjalis")
    res.cookie(token)
    res.json("posted..")
   }).catch((err)=>{
       res.send(err)
   })
});

module.exports = register;