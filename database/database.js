const mongoose= require('mongoose');

const URI= 'mongodb+srv://kevin:DaLf1hKOt8rgJHIm@clusterback-lvfsd.mongodb.net/database?retryWrites=true&w=majority';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(db=> console.log('DB is conected!'))
.catch(err=>console.log(err));

module.exports = mongoose;