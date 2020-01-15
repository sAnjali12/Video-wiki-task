var knex = require("./connection.js");

var insertData = (userDetail)=>{
    return knex("registeration").insert(userDetail)
}


module.exports={insertData}