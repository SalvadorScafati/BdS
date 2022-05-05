const express = require("express");
const router = express.Router();
const blogSchema = require("../models/blog.js")

router.get("/blog",(req,res)=>{
    blogSchema.find()
        .then((data)=>{console.log(data);res.json(data)})
        .catch((err)=>console.log(err))
})


/*
router.post("/blog",(req,res)=>{
    const blog=blogSchema(req.body)
    console.log(req.body)
    blog
        .save()
        .then((data)=>{console.log(data);res.json(data)})
        .catch((error)=>res.json({message:error}))
})*/


module.exports=router;

