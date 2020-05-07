const controller = {};
const jwt = require("jsonwebtoken")

//información
controller.infoPostLogin=(req, res) =>{
    res.json({
        FUNCION: "Generar un login",
        PROTOCOLO: "post",
        INPUT: "Recibe un json con los datos del supuesto usuarios",
        JSON: "{correo,contraseña}",
        OUTPUT: "Devuelve json con un token,idUsuario, nombre, correo y rol. [este token lo debes enviar con todas las peticiones que se hagan]"
    })
}
controller.infoGetHistorial=(req, res) =>{
    res.json({
        FUNCION: "Buscar todo el historial de compras de un usuario",
        PROTOCOLO: "get",
        INPUT: "",
        JSON: "",
        OUTPUT: "Devuelve json con todas las compras identificadas por producto y precio"
    })
}
controller.infoGetCarrito=(req, res) =>{
    res.json({
        FUNCION: "Buscar todo los productos en el carrito de un usuario",
        PROTOCOLO: "get",
        INPUT: "",
        JSON: "",
        OUTPUT: "Devuelve json con todas las productos identificados con el producto y precio"
    })
}
controller.infoGetDatos=(req, res) =>{
    res.json({
        FUNCION: "Buscar todo los datos de un usuario",
        PROTOCOLO: "get",
        INPUT: "",
        JSON: "",
        OUTPUT: "Devuelve json con todos los datos de usuarios los cuales son: id, nombre, rol y correo"
    })
}



//funciones
controller.postLogin=(req, res) =>{
    console.log(req.body)
    const id = 1
    const nombre = "kevin"
    const correo = "correo@hotmail.com"
    const rol = "Cliente"

    const token = jwt.sign({ id: id,nombre: nombre,correo: req.body.correo, rol: rol},'colomos2019',{expiresIn: "5h"});
    res.status(200).json({
        token: token,
        idUser: id,
        nombre: nombre,
        correo: correo,
        rol: rol
    })
}
controller.getHistorial=(req, res) =>{
    
    const historial = [
        {producto:"Agua", precio:"15"},
        {producto:"Carne Molida 300gr", precio:"150"}
    ]
    res.json({
        historial: historial
    })
}
controller.getCarrito=(req, res) =>{
    
    const carrito = [
        {producto:"Agua", precio:"15"},
        {producto:"Carne Molida 300gr", precio:"150"}
    ]
    res.json({
        carrito: carrito
    })
}
controller.getDatos=(req, res) =>{ 
    res.json({
        id: req.userData.id,
        nombre: req.userData.nombre,
        correo: req.userData.correo,
        rol: req.userData.rol
    })
}






module.exports=controller;