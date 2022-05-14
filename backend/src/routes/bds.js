const express = require("express");
const router = express.Router();
const blogSchema = require("../models/blog.js")
const revistaSchema = require("../models/revista.js")
const adminSchema = require("../models/admin.js")




router.get("/blog",(req,res)=>{
    blogSchema.find()
        .then((data)=>{console.log(data);res.json(data)})
        .catch((err)=>console.log(err))
})

router.get("/revista",(req,res)=>{
    revistaSchema.find().sort( { numero : -1})
        .then((data)=>{console.log(data);res.json(data)})
        .catch((err)=>console.log(err))
})

router.post("/login",async (req,res)=>{
    try {
        const user = await adminSchema.findOne({ user: req.body.user });
        if (user) {
          const bcrypt=require("bcrypt")
          const cmp = await bcrypt.compare(req.body.pass, user.pass);
          if (cmp) {
            console.log("Auth Successful")
              jwt.sign({user}, '.-tokensecret-.', {expiresIn: '1200s'}, (err, token) => {
                res.json({
                    token
                });
            })
          } else {
            console.log("Wrong username or password.")
            res.json({message:"Wrong username or password."});
          }
        } else {
          console.log("User dont exist.")
          res.json({message:"User dont exist"});
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal Server error Occured"});
      }
})

router.get("/validtoken",verifyToken,(req,res)=>{
  console.log(req.token)
  jwt.verify(req.token, '.-tokensecret-.', (error, authData) => {
    if(error){
        res.sendStatus(403);
    }else{
        res.json({
                message: "ok",
                authData
        });
    }
});
})

router.post("/updateblog",verifyToken,(req,res)=>{
  jwt.verify(req.token, '.-tokensecret-.', (error, authData) => {
    if(error){
        res.sendStatus(403);
    }else{
      console.log(req.body)
       blogSchema.updateOne({type:req.body.type},{$set:{link:req.body.link,img:req.body.img,tittle:req.body.tittle}})
       .then((data)=>{console.log(data);res.sendStatus(200)})
       .catch((err)=>console.log(err))
    }
});
})

const jwt = require("jsonwebtoken");
function verifyToken(req, res, next){
  const bearerHeader =  req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
       const bearerToken = bearerHeader.split(" ")[1];
       req.token  = bearerToken;
       next();
  }else{
      res.sendStatus(403);
  }
}



module.exports=router;

