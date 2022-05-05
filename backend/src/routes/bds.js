const express = require("express");
const router = express.Router();
const blogSchema = require("../models/blog.js")
const revistaSchema = require("../models/revista.js")

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


/*
router.get("/insertrevista",(req,res)=>{
    let i=0
    while (data.numeros.length>i){
    const rev=revistaSchema(data.numeros[i])
    rev
        .save()
        .then((data)=>{console.log(data);res.json(data)})
        .catch((error)=>res.json({message:error}))
     i++
    }
})*/


module.exports=router;

