const controller = {};


//información
controller.infoPostProducto=(req, res) =>{
    res.json({
        FUNCION: "Insertar un producto a la BD",
        PROTOCOLO: "post",
        INPUT: "Recibe un json con los datos de un producto",
        JSON: "{nombre,categoria,precio,stock,url}",
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
        JSON: "{producto,precio}",
        OUTPUT: "Devuelve true o false en caso de ser o no exitosa la operación"
    })
}
controller.infoCarritoProducto=(req, res) =>{
    res.json({
        FUNCION: "Añadir a carrito un producto",
        PROTOCOLO: "post",
        INPUT: "Se recibe un objeto json con los datos del producto y del usuario",
        JSON: "{producto,precio}",
        OUTPUT: "Devuelve true o false en caso de ser o no exitosa la operación"
    })
}




//funciones
controller.postProducto=(req, res) =>{
    console.log(req.body)
    if(req.userData.rol == "Administrador"){
        res.json({
            operacion: true,
            message: "Añadido",
            producto: req.body.producto,
            categoria: req.body.categoria,
            precio: req.body.precio,
            stock: req.body.stock,
            URL: req.body.url
        });
    }

    res.json({operacion: false,message: "Solo los administradores pueden agregar productos"})
    
}
controller.getProducto=(req, res) =>{
    const productos = [
        {categoria: "alimentos",producto:"Agua", precio:"15"},
        {categoria: "alimentos",producto:"Carne Molida 300gr", precio:"150"},
        {categoria: "hogar" ,producto:"Ventilador HIX3gen", precio:"1200"}
    ]
    res.json({
        productos: productos
    })
}
controller.comprarProducto=(req, res) =>{
    console.log(req.body)
    if(req.userData.rol == "Administrador"){
        res.json({operacion: false,message: "Un administrador no puede comprar"})
    }
    res.json({
        operacion: true,
        message: "Comprado",
        comprador: req.userData.nombre,
        idComprador: req.userData.id,
        producto: req.body.producto,
        precio: req.body.precio
    });
}
controller.semicompraProducto=(req, res) =>{
    console.log(req.body)
    if(req.userData.rol == "Administrador"){
        res.json({operacion: false,message: "Un administrador no puede añadir al carrito"})
    }
    res.json({
        operacion: true,
        message: "Añadiendo al carrito",
        comprador: req.userData.nombre,
        idComprador: req.userData.id,
        producto: req.body.producto,
        precio: req.body.precio
    });
}



module.exports=controller;