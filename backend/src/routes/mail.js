const { text } = require("body-parser");
const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');


  
async function  send(text,name,mail){
    let bodymail=name+"\n"+"\n"+text;
    require("dotenv").config()
    let user=process.env.EMAIL_USER
    let pass=process.env.EMAIL_PASS

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: user,
          pass: pass
        }
    });
      
    var mailOptions = { 
        from: {name:mail,address:'salvadorscafati@gmail.com'},
        to:      'salvadorscafati@gmail.com',
        subject: 'Email pagina boca de sapo ',
        text: bodymail
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return error
    } else {
      console.log('Email sent: ' + info.response);
      return info.response
    }
});}


router.post("/send",(req,res)=>{
    send(req.body.text,req.body.name,req.body.mail)
    .then((data)=>{console.log(data);res.json(data)})
    .catch((err)=>console.log(err))
})

module.exports=router;
