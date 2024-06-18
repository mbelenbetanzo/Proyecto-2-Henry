require("dotenv").config();

const mongoose = require("mongoose");


//en este modulo hace la conexion a la base de datos

const dbCon = async () => {
try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.csw2mrz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`);
} 
 catch (error) {
    console.error('Error al conectar a MongoDB Atlas:', error);
    throw error; //NO ME TIRA ERROR ASIQUE ESTA CONECTADO
}
};

//dbCon()
module.exports = { dbCon }