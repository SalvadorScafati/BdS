const moongose=require("mongoose")
const adminSchema = moongose.Schema({
    user:String,
    pass:String
})

module.exports=moongose.model("admin",adminSchema)