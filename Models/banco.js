const mongoose = require ('mongoose');
const BancoSchema=mongoose.Schema({
  //id
  correo: {type: String, required: true, unique: true},
  contraseña: {type: String, required: true},
  saldo: {type: Number, required: true}
});

module.exports=mongoose.model('Banco', BancoSchema);

