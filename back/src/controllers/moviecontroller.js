
const { infopeliculas, createPelicula } = require ("../services/movieservice"); 

module.exports = {
    getAllPosts: async (req, res) => {
      try{
        //aca va el servicio para obtener las pelis
       const movies = await infopeliculas()
        res.status(200).json({
            message: "Info pelis",
            data: movies
    })
} catch (error) {
    res.status(500).json({
        message: "Error al obtener las peliculas",
        error: error.message
    })
}
},

createPost: async (req, res) => {
    try{
        const movieData = req.body
        const movie = await createPelicula(movieData);
        res.status(201).json({
            message: "Pelicula creada con exito",
            data: movie
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear pelicula",
            error: error.message
        });
    }
}


}

