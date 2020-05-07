const controller = {};



controller.infoPostLogin=(req, res) =>{
    res.json({
        FUNCION: "Generar un login",
        PROTOCOLO: "post",
        INPUT: "Recibe un json con los datos del supuesto usuarios",
        JSON: "{correo,contraseña}",
        OUTPUT: "Devuelve json con un token, tiempo de expiración, id_usuario, nombre_usuario, correo [este token lo debes enviar con todas las peticiones que se hagan]"
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
    res.json({
        message: "Insertando producto",
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    });
}







module.exports=controller;