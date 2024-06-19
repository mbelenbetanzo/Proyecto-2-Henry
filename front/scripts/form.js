    
    import axios from 'axios';

    // EXPORTAR BOTON PARA HACER EL EVENT LISTENER EN INDEX
    const boton = document.querySelector(".section__btn");
    
    const valores = (title, year, director, duration, rate, poster, generos) => {
        const movieValues = {
            title: title,
            year: year,
            director: director,
            duration: duration,
            genre: generos,
            rate: rate,
            poster: poster
        }
        postear(movieValues);
    };
    
    const postear = async (info) => {
        try {
            await axios.post("http://localhost:3002/movies", info);
            alert("Película agregada exitosamente");
        } catch (error) {
            console.error("Error al agregar la película:", error);
            alert("Error al agregar la película");
        }
    }
    
    export { boton, valores };
    
    
    




  