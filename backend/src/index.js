const express = require("express");

const app = express();

const port = process.env.PORT || 9000;

const cors = require('cors')
app.use(cors())

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/*_MongoDB_*/
const moongose=require("mongoose");
require("dotenv").config();
uri=process.env.MONGODB_URI;
moongose
    .connect(uri)
    .then(()=>console.log("connected to mongodb"))
    .catch((error)=>console.log(error))

app.listen(port,()=>{
    console.log("server in port http://localhost:"+port)
})


//routes
const routes=require("./routes/bds")
app.use('/api',routes)

const mailroutes=require("./routes/mail")
app.use('/mail',mailroutes)



