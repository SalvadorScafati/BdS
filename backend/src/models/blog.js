const moongose=require("mongoose")
const blogSchema = moongose.Schema({
    type:String,
    tittle:String,
    link:String,
    img:String,
    autor:String,
    text:String,
    date:String
})

module.exports=moongose.model("blogs",blogSchema)