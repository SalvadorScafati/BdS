const moongose=require("mongoose")
const blogSchema = moongose.Schema({
    tittle:String,
    link:String,
    img:String
})

module.exports=moongose.model("blog",blogSchema)