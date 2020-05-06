const controller = {};

controller.infoPostProducto=(req, res) =>{
    res.json({
        FUNCION: "Insertar un producto",
        INPUT: "Recibe un json con los datos de un producto",
        JSON: "{nombre,precio,stock}",
        OUTPUT: "Devuelve true o false en caso de ser o no insertado"
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