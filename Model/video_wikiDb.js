var knex = require("./connection.js");

var insertData = (userDetail)=>{
    return knex("registeration").insert(userDetail)
}

var user_login = (email)=>{
    return knex.select('*').from('registeration').havingIn("email", email)
    
}

var creatPost = (userPost)=>{
    return knex('createPost').insert(userPost)
}

var userLikes =(likes)=>{
    return knex.from("user_likes").insert(likes)
}

module.exports={insertData, user_login, creatPost, userLikes}