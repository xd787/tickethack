// Insert your connection string inside this variable
const mongoose = require('mongoose');

const connectionString =
  "mongodb+srv://Admin:EMZP2OZTcSvuNdG7@cluster0.jk3dxkg.mongodb.net/playwithmongoose";

module.exports = connectionString; 

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));

// Do not edit/remove this line
