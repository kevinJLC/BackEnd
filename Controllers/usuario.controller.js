const controller = {};
const jwt = require("jsonwebtoken")
const usuario=require('../Models/usuario');
const producto=require('../Models/producto')
const compra=require('../Models/compra')
const banco=require('../Models/banco');
const carrito=require('../Models/carrito');

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

    usuario.findOne({correo: req.body.correo,contraseña: req.body.contraseña})
    .then(user => {
        const token = jwt.sign({ id: user.id,nombre: user.nombre,correo: user.correo, rol: user.rol},'colomos2019',{expiresIn: "5h"});
        res.status(200).json({
            operación: true,
            message: "Login exitoso",
            token: token,
            idUser: user.id,
            nombre: user.nombre,
            correo: user.correo,
            rol: user.rol
        })
    })
    .catch(err => {
        console.log(err) 
        res.json({
            operación: false,
            message: "Login fallido"
        })
    })
}
controller.getHistorial=async (req, res) =>{
    console.log(req.userData)
    if(req.userData.rol=="Cliente"){
        const historial = await compra.find({id_comprador: req.userData.id})
        res.json(historial)
    }
    else{
        res.json({
            opreacion: false,
            message: "Solo los clientes tiene historial de compras"
        })
    }


}
controller.getCarrito= async (req, res) =>{
    console.log(req.userData)
    if(req.userData.rol=="Cliente"){
        const carritos = await carrito.find({id_comprador: req.userData.id})
        res.json(carritos)
    }
    else{
        res.json({
            opreacion: false,
            message: "Solo los clientes tiene carrito"
        })
    }
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