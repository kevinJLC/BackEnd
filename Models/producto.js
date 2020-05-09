const mongoose = require ('mongoose');
const ProductoSchema=mongoose.Schema({
  //id
  producto: {type: String, required: true, unique: true},
  categoria: {type: String, required: true},
  precio: {type: Number, required: true},
  stock: {type: Number, required: true},
  url: {type: String, required:true, unique:true}
});

module.exports=mongoose.model('productos', ProductoSchema);