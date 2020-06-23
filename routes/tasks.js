const router = require('express').Router()
const autorizacion = require('../Middleware/autorización');
const productos=require('../Controllers/productos.controller')
const usuario=require('../Controllers/usuario.controller')




/*Productos
        router.get('/api/productos/insertar/info',productos.infoPostProducto)
        router.get('/api/productos/comprar/info',productos.infoComprarProducto)
        router.get('/api/productos/listado/info',productos.infoGetProducto)
        router.get('/api/productos/semicompra/info',productos.infoCarritoProducto)

router.post('/api/productos/insertar',autorizacion,productos.postProducto)
router.post('/api/productos/comprar',autorizacion,productos.comprarProducto)
router.get('/api/productos/listado',autorizacion,productos.getProducto)
router.post('/api/productos/semicompra',autorizacion,productos.semicompraProducto)

*/



//Usuario
        router.get('/api/usuario/login/info',usuario.infoPostLogin)
        router.get('/api/usuario/historial/info',usuario.infoGetHistorial)
        router.get('/api/usuario/carrito/info',usuario.infoGetCarrito)
        router.get('/api/usuario/datos/info',usuario.infoGetDatos)

router.post('/api/usuario/registro',usuario.postRegistro)
router.post('/api/usuario/login',usuario.postLogin)
router.get('/api/usuario/historial',autorizacion,usuario.getHistorial)
router.get('/api/usuario/carrito',autorizacion,usuario.getCarrito)
router.get('/api/usuario/datos',autorizacion,usuario.getDatos)
router.post('/api/usuario/deletecarrito',autorizacion,usuario.deleteCarrito)
router.post('/embebidos',usuario.postRGB)
router.get('/embebidos/get',usuario.getRGB)









module.exports=router;