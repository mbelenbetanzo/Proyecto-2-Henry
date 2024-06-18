const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
       required: true, 
    },
    year: {
        type: Number,
        required: true,
       min: 1888,
       max: 2024,
    },
    director: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
       min: 50,
        max: 400,
        required: true,
    },
    genre: {
        type: Array,
        required: true,
    },
    rate: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
    },
    poster: {
        type: String,
       required: true,
    }
});

const Movies = mongoose.model("Movies", movieSchema, "Movies");//este es el traductor, la conexion especifica
//EL TERCER PARAMETRO ES PARA ESPECIFICARLE SIN VUELTAS A QUE 
module.exports = { Movies }; 

