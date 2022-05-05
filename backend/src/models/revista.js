const moongose=require("mongoose")
const revistaSchema = moongose.Schema({
    numero:moongose.Schema.Types.Number,
    nombre:String,
    img:String,
    pdf:String,
    issu:String,
    articulos:Array,
    dossier:moongose.Schema.Types.Mixed
})

module.exports=moongose.model("revista",revistaSchema)