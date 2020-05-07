const router = require('express').Router()

const productos=require('../Controllers/productos.controller')
const usuario=require('../Controllers/usuario.controller')

//Productos
router.get('/api/productos/insertar/info',productos.infoPostProducto)
router.get('/api/productos/comprar/info',productos.infoComprarProducto)
router.get('/api/productos/listado/info',productos.infoGetProducto)
router.get('/api/productos/semicompra/info',productos.infoCarritoProducto)






router.post('/api/productos/insertar',productos.PostProducto)
router.get('/api/productos/consulta',productos.getProducto)
router.post('/api/productos/comprar',productos.comprarProducto)

//Usuario
router.get('/api/usuario/login/info',usuario.infoPostLogin)
router.get('/api/usuario/historial/info',usuario.infoPostHistorial)
router.post('/api/usuario/carrito/info',usuario.infoPostCarrito)
router.post('/api/usuario/datos/info',usuario.infoPostDatos)



router.post('/api/usuario/login',usuario.postLogin)

module.exports=router;