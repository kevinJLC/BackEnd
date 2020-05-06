const router = require('express').Router()

const productos=require('../Controllers/productos.controller')

router.get('/',productos.getBienvenida)
router.get('/api/productos/insertar/info',productos.infoPostProducto)
router.post('/api/productos/insertar',productos.PostProducto)
router.get('/api/productos/consulta',productos.getProducto)
router.post('/api/productos/comprar',productos.comprarProducto)



module.exports=router;