const controller = {}
const producto=require('../Models/producto')
const compra=require('../Models/compra')
const usuario=require('../Models/usuario');
const banco=require('../Models/banco');
const carrito=require('../Models/carrito');

//información
controller.infoPostProducto=(req, res) =>{
    res.json({
        FUNCION: "Insertar un producto a la BD",
        PROTOCOLO: "post",
        INPUT: "Recibe un json con los datos de un producto",
        JSON: "{producto,categoria,precio,stock,url}",
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
        JSON: "{producto,cantidad,contraseña}",
        OUTPUT: "Devuelve true o false en caso de ser o no exitosa la operación"
    })
}
controller.infoCarritoProducto=(req, res) =>{
    res.json({
        FUNCION: "Añadir a carrito un producto",
        PROTOCOLO: "post",
        INPUT: "Se recibe un objeto json con los datos del producto y del usuario",
        JSON: "{producto,cantidad}",
        OUTPUT: "Devuelve true o false en caso de ser o no exitosa la operación"
    })
}




//funciones
controller.postProducto=async (req, res) =>{
    console.log(req.body)
    if(req.userData.rol == "Administrador"){
        const newProducto = new producto ({
            producto: req.body.producto,
            categoria: req.body.categoria,
            precio: req.body.precio,
            stock: req.body.stock,
            url: req.body.url
            })

            await newProducto.save()
            .then(result=>{
                res.json({
                    operacion: true,
                    message: "Añadido",
                    producto: req.body.producto,
                    categoria: req.body.categoria,
                    precio: req.body.precio,
                    stock: req.body.stock,
                    url: req.body.url
                });
            })
            .catch(err => {
                console.log(err)
                res.json({
                    operacion: false,
                    message: "No Añadido",
                    producto: req.body.producto,
                    categoria: req.body.categoria,
                    precio: req.body.precio,
                    stock: req.body.stock,
                    url: req.body.url
                });
            })
                
    }else{
        res.json({operacion: false,message: "Solo los administradores pueden agregar productos"})
    }

    
    
}
controller.getProducto=async (req, res) =>{
    const productos = await producto.find()
        
    res.json(productos)
}
controller.comprarProducto=async (req, res) =>{
    console.log(req.userData)
    if(req.userData.rol == "Cliente"){
        const product = await producto.findOne({producto: req.body.producto})
        const total=req.body.cantidad * product.precio
        
        banco.findOne({correo: req.userData.correo,contraseña: req.body.contraseña})
        .then(async sesion => {
            // Comprobar que hay suficiente saldo en el banco
            if(sesion.saldo>=total){
                // comprobar que hay suficiente producto
                if(product.stock>=req.body.cantidad){
                    

                
                const saldo=sesion.saldo-total
                // resta saldo a la cuenta de banco
                banco.findOneAndUpdate({correo: req.userData.correo},{saldo:saldo}) 
                .then(result=>{
                    const newCompra = new compra({
                        id_comprador: req.userData.id,
                        comprador: req.userData.nombre,
                        producto: req.body.producto,
                        precio: product.precio,
                        cantidad: req.body.cantidad,
                        total: total
                    })
                    //Se guarda una compra
                    newCompra.save()
                    .then( result =>{
                        //Se disminuye la cantidad de producto
                        producto.findOneAndUpdate({producto: req.body.producto},{stock: product.stock-req.body.cantidad})
                        .then(result =>{
                            res.status(200).json({
                                operacion: true,
                                message: "compra exitosa",
                            })
                        })
                        .catch(err => {
                            console.log(err) 
                            res.json({
                                operacion: false,
                                message: "No se pudo obtener el producto"
                            })
                        })
                    })
                    .catch(err => {
                        console.log(err) 
                        res.json({
                            operacion: false,
                            message: "No se pudo guardar la compra pero ya se depositó el dinero"
                        })
                    })

                    
                })
                .catch(err => {
                    console.log(err) 
                    res.json({
                        operacion: false,
                        message: "No se pudieron sacar los fondos"
                    })
                })


                }else{
                    res.json({
                        operacion: false,
                        message: "No hay suficiente producto"
                    })
                }
            }else{
                res.json({
                    operacion: false,
                    message: "No cuenta con suficiente dinero"
                })
            }
        })
        .catch(err => {
            console.log(err) 
            res.json({
                operacion: false,
                message: "Acceso a la cuenta de banco fallido"
            })
        })

    }else{
        res.json({operacion: false,message: "Solo los clientes pueden comprar productos"})
    }


    
}
controller.semicompraProducto=async (req, res) =>{
    console.log(req.userData)
    const product = await producto.findOne({producto: req.body.producto})
    const total=req.body.cantidad * product.precio
    if(req.userData.rol == "Cliente"){
        const newCarrito = new carrito ({
            id_comprador: req.userData.id,
            comprador: req.userData.nombre,
            producto: req.body.producto,
            cantidad: req.body.cantidad,
            precio: product.precio,
            total: total
            })
            await newCarrito.save().then(console.log("Producto añadido"))
                res.json({
                    operacion: true,
                    message: "Carrito añadido",
                    comprador: req.userData.nombre,
                    producto: req.body.producto,
                    cantidad: req.body.cantidad,
                    precio: product.precio,
                    total: total
                })
    }else{
        res.json({operacion: false,message: "Solo los clientes pueden agregar al carrito"})

    }

}




module.exports=controller;