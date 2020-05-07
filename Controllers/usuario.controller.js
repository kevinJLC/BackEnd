const controller = {};
const jwt = require("jsonwebtoken")


controller.infoPostLogin=(req, res) =>{
    res.json({
        FUNCION: "Generar un login",
        PROTOCOLO: "post",
        INPUT: "Recibe un json con los datos del supuesto usuarios",
        JSON: "{correo,contraseña}",
        OUTPUT: "Devuelve json con un token,idUsuario, nombre_usuario, correo y rol. [este token lo debes enviar con todas las peticiones que se hagan]"
    })
}
controller.infoPostHistorial=(req, res) =>{
    res.json({
        FUNCION: "Buscar todo el historial de compras de un usuario",
        PROTOCOLO: "post",
        INPUT: "Recibe un json con los datos del usuario",
        JSON: "{id_usuario}",
        OUTPUT: "Devuelve json con todas las compras identificadas con el nombre de usuario,producto y precio"
    })
}
controller.infoPostCarrito=(req, res) =>{
    res.json({
        FUNCION: "Buscar todo los productos en el carrito de un usuario",
        PROTOCOLO: "post",
        INPUT: "Recibe un json con los datos del usuario",
        JSON: "{id_usuario}",
        OUTPUT: "Devuelve json con todas las productos identificados con el nombre de usuario,producto y precio"
    })
}
controller.infoPostDatos=(req, res) =>{
    res.json({
        FUNCION: "Buscar todo los datos de un usuario",
        PROTOCOLO: "post",
        INPUT: "Recibe un json con los datos del usuario",
        JSON: "{id_usuario}",
        OUTPUT: "Devuelve json con todos los datos de usuarios los cuales son: id_usuario,nombre de usuario, correo y tipo de usuario"
    })
}

controller.postLogin=(req, res) =>{
    console.log(req.body)
    const id = 1
    const nombre = "kevin"
    const correo = "correo@hotmail.com"
    const rol = "Administrador"

    const token = jwt.sign({ id: id,nombre: nombre,correo: req.body.correo, rol: rol},'colomos2019',{expiresIn: "5h"});
    res.status(200).json({
        token: token,
        idUser: id,
        nombre: nombre,
        correo: correo,
        rol: rol
    })
}







module.exports=controller;