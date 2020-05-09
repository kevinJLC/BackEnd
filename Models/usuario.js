const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
    //id se lo asigna mongo
    rol: {type: String, required: true},
    nombre: {type: String, required: true, unique: true},
    correo: {type: String, required: true, unique: true},
    contraseña: {type: String, required: true}
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Usuarios", userSchema)