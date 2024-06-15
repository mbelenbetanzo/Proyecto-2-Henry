const express = require ("express");
//Esto es como traer el plano del edificio para que podamos usarlo.//aca no lo desestructuro porque me lo traigo entero

const router = require ("./routes")
//require("./routes"): Esto es como traer un mapa con todas las instrucciones
//de rutas que el conserje necesita para guiar a las personas. Este mapa está en un archivo llamado routes.js.
//index jajaja

const morgan = require("morgan");
const cors = require("cors")


const app = express(); 
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());



//aca hace como una instancia de express?//creamos nuestra app justamente usando express

app.use(router); //le decimos al edificio app que use al conserje para guiar a la gente

module.exports = app;