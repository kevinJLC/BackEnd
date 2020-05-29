const mongoose = require ('mongoose');
const EmbebidosSchema=mongoose.Schema({
  //id
  r: {type: Number, required: true},
  g: {type: Number, required: true},
  b: {type: Number, required: true}
});

module.exports=mongoose.model('Embebidos', EmbebidosSchema);