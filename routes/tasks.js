const router = require('express').Router()

const productos=require('../Controllers/productos.controller')

router.get('/api/productos/insertar/info',productos.infoPostProducto)
router.post('/api/productos/insertar',productos.PostProducto)



module.exports=router;