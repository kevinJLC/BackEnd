const controller = {};



controller.infoPostProducto=(req, res) =>{
    res.json({
        FUNCION: "Insertar un producto a la BD",
        PROTOCOLO: "post",
        INPUT: "Recibe un json con los datos de un producto",
        JSON: "{nombre,precio,stock}",
        OUTPUT: "Devuelve true o false en caso de ser o no insertado"
    })
}
controller.infoGetProducto=(req, res) =>{
    res.json({
        FUNCION: "obtener todos los productos de la tienda",
        PROTOCOLO: "get",
        INPUT: " ",
        JSON: " ",
        OUTPUT: "Devuelve un objeto json con todos los productos de la BD"
    })
}
controller.infoComprarProducto=(req, res) =>{
    res.json({
        FUNCION: "Comprar un producto",
        PROTOCOLO: "post",
        INPUT: "Se recibe un objeto json con los datos del producto y del usuario",
        JSON: "{id_Usuario, nombre_usuario,nombre_producto,precio}",
        OUTPUT: "Devuelve true o false en caso de ser o no exitosa la operación"
    })
}
controller.infoCarritoProducto=(req, res) =>{
    res.json({
        FUNCION: "Añadir a carrito un producto",
        PROTOCOLO: "post",
        INPUT: "Se recibe un objeto json con los datos del producto y del usuario",
        JSON: "{id_Usuario, nombre_usuario,nombre_producto,precio}",
        OUTPUT: "Devuelve true o false en caso de ser o no exitosa la operación"
    })
}






controller.PostProducto=(req, res) =>{
    console.log(req.body)
    res.json({
        message: "Insertando producto",
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    });
}

controller.getProducto=(req, res) =>{
    res.json({
        nombre: "Batman figura de acción",
        precio: 2700,
        stock: 10
    });
}

controller.comprarProducto=(req, res) =>{
    console.log(req.body)
    res.json({
        message: "comprando producto",
        nombre: req.body.nombre
    });
}



module.exports=controller;