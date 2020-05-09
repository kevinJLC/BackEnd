const mongoose = require ('mongoose');
const CarritoSchema=mongoose.Schema({
  //id
  id_comprador: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: true},
  comprador: {type: String, required: true},
  producto: {type: String, required: true},
  precio: {type: Number, required: true},
  cantidad: {type: Number, required: true},
  total: {type: Number, required: true}
});

module.exports=mongoose.model('carritos', CarritoSchema);