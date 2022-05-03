const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log("server in port http://localhost:"+port)
})