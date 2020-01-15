const express = require('express');
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
       res.json(data)
   }).catch((err)=>{
       res.send(err)
   })
});

module.exports = register;