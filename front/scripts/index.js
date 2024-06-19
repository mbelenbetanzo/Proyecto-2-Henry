

//$.get("https://students-api.up.railway.app/movies", (data) => {
//    agregarContenedor(data)
//});




import axios from 'axios';
import { agregarContenedor } from './agregarcontenedor';
import { boton, valores} from './form';

const pelis = async () => {
    try {
        const respuesta = await axios.get("http://localhost:3002/movies");
        agregarContenedor(respuesta.data.data);
    } catch (error) {
        console.error("No encontramos las peliculas solicitadas", error);
    }
};

pelis();

boton.addEventListener("click", () => {
    const title = document.getElementById("inputTitle").value;
    const year = parseInt(document.getElementById("inputDescription").value);
    const director = document.getElementById("inputDirector").value;
    const duration = parseInt(document.getElementById("inputDuration").value);
    const rate = parseFloat(document.getElementById("inputrango").value);
    const poster = document.getElementById("inputUrl").value;
    const checkboxes = document.querySelectorAll("input[name='genero[]']:checked");
    const generos = Array.from(checkboxes).map(checkbox => checkbox.value);

    if (!title || !year || !director || !duration || !rate || !poster || generos.length === 0) {
        alert("No completaste todos los campos requeridos para agregar la película😟");
        return null;
    }
    valores(title, year, director, duration, rate, poster, generos);
});













