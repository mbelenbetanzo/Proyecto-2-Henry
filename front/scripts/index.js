

//$.get("https://students-api.up.railway.app/movies", (data) => {
//    agregarContenedor(data)
//});

const axios = require('axios');
const { agregarContenedor } = require('./agregarcontenedor');

const pelis = async () => {
    try {
        const respuesta = await axios.get("http://localhost:3001/movies");
        agregarContenedor(respuesta.data.data);
    } catch (error) {
        console.error("No encontramos las peliculas solicitadas", error);
    }
};

pelis();


 //"https://students-api.up.railway.app/movies"
    

