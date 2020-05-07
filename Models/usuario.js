const moongose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
    correo: {type: String, require: true, unique: true},
    contraseña: {type: String, require: true}
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model("User", userSchema)