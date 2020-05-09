const express = require('express')
const app= express()
const morgan=require('morgan')
const {mongoose} = require('./database/database')
const tasks = require('./routes/tasks')
const path=require('path');

//const cors=require('cors')
/*

const request = require("request-promise");
*/
 
    //Middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-type, Accept, Authorization"
    );
    
    if(req.method === 'OPTIONS'){
        res.header ('Access-Control-Allow-Methods','GET, POST,PATCH, PUT, DELETE');
        return res.status(200).json({});
    }
    
    next();
});

//app.use(cors({origin: '/'}));
app.use(morgan('dev'))
app.use(express.json()) //Body Parser desde express incluido para usar req.body
app.use(express.urlencoded({extended: false}))

    //static files
//app.use("",express.static(path.join(__dirname,'angular')));

    //Rutas
app.use(tasks)
app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,"public","index.html"))
});




/*
-------> añadir un usuario
const Usuario=require('./Models/usuario');
const newUser = new Usuario ({
tipo: "Cliente",
nombre: "Pedro Páramo",
correo: "sexi_pedro@hotmail.com",
contraseña: "comala123"
})
newUser.save()

------> añadir una cuanta de banco
const cuenta=require('./Models/banco');
const newCuenta = new cuenta ({
correo: "sexi_pedro@hotmail.com",
contraseña: "comala123",
saldo: "1500"
})
newCuenta.save()
*/



console.log("Server start")
module.exports=app;