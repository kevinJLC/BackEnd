const mongoose = require ('mongoose');
const uniqueValidator = require("mongoose-unique-validator")

const ProductoSchema=mongoose.Schema({
  //id
  producto: {type: String, required: true},
  categoria: {type: String, required: true},
  precio: {type: Number, required: true},
  stock: {type: Number, required: true},
  url: {type: String, required:true}
});
ProductoSchema.plugin(uniqueValidator)
module.exports=mongoose.model('productos', ProductoSchema);