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
    res.send("Insertando producto");
}



module.exports=controller;