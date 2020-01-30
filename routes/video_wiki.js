const express = require('express');
const jwt = require('jsonwebtoken')
const register = express.Router();
const video_wikiDb = require("../Model/video_wikiDb");
register.use(express.json())

register.post("/registeration",(req,res)=>{
   var userDetail = {
       "username": req.body.username,
       "email": req.body.email,
       "password": req.body.password
   }
   let Response = video_wikiDb.insertData(userDetail)
   Response.then((data)=>{
    res.json("posted..")
   }).catch((err)=>{
       res.send(err)
   })
});

register.get("/login",(req, res)=> {
    var email = req.body.email;
    var password = req.body.password;
    var Response = video_wikiDb.user_login(email)
    Response.then((data)=>{
        if(data.length == 0){
            res.send({massage: "email is invalid.."})
        }
        else if(password == data[0]['password']){
            let token = jwt.sign({"user":data[0]},"secret_key")
            res.cookie(token)
            jwt.verify(token,"secret_key",(err,result)=>{
                res.json({massage:"Login Successful ",token:result})
            })   
        }
        else{
            res.send({massage: "Password is invalid.."})
        }
    }).catch((err)=>{
        res.send(err)
    })
});


register.post("/createPost",(req,res)=>{
    var userPost = {
        post_url: req.body.post_url,
        caption: req.body.caption,
        user_id: req.body.user_id 
    }
    let Response = video_wikiDb.creatPost(userPost)
    Response.then((data)=>{
     res.json(data)
    }).catch((err)=>{
        res.send(err)
    })
});

register.post('/userLikes',(req,res)=>{
    const userLikes={
        "likes": req.body.likes,
        "comment": req.body.comment,
        "user_id": req.body.user_id,
        "post_id": req.body.post_id
    }
    let Response = video_wikiDb.userLikes(userLikes)
    Response.then((data)=>{
        return res.json(data);
    }).catch((err)=>{
        res.send(err)
    });
})


register.get("/homePage",(req,res)=>{
    let Response = video_wikiDb.homePage()
    Response.then((data)=>{
        return res.json(data);
    }).catch((err)=>{
        res.send(err)
    });
})

register.get('/likeCount/:post_id',(req,res)=>{
    var post_id = req.params.post_id
    let Response = video_wikiDb.likeCount(post_id)
    Response.then((data)=>{
        var count = 0
        for(var index in data){
            count = count+1
        }
        res.send({like:count})
    }).catch((err)=>{
        res.send(err)
    })
});


register.post('/userDetails',(req,res)=>{
    var userDetails = {
        Name:req.body.Name,
        Birthday:req.body.Birthday,
        Mobile:req.body.Mobile,
        Gender:req.body.Gender,
        Location:req.body.Location,
        Education:req.body.Education,
        Experience:req.body.Experience,
    }
    let Response = video_wikiDb.insertUserDetails(userDetails)
    Response.then((result)=>{
        return res.json(result);
    }).catch((err)=>{
        res.send(err)
    });
});










module.exports = register;