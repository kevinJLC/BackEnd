const jwt= require('jsonwebtoken');


module.exports = (req,res,next)=>{
try{
  const token= req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, 'colomos2019');
  req.userData = { id: decodedToken.id, nombre:decodedToken.nombre, correo: decodedToken.correo, rol: decodedToken.rol};
  next();
}catch(error){
  res.status(401).json({message: 'Error: Sin autorización. Su petición no tiene un token dentro del Header en el campo authorization, su token es inválido o bien su token ya expiró'});
}
};