
const path = require('path');

module.exports = {
    entry: "./scripts/index.js", //por donde empezar a escanear el proyecto
    output: {
        path: __dirname + '/public',
       // path: __dirname = "/public",
        filename: "bundle.js", 
    } //como se va a llamar, donde lo vamos a guardar
};

//ahora que ya ocnfiguere webpack, le tengo que decir, quesesoooo, 
//voy a mi ackage json a cinfugurar el comando build para que funcione 