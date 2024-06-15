
const { infopeliculas } = require ("../services/movieservice"); 

module.exports = {
    getAllPosts: (req, res) => {

        //aca va el servicio para obtener las pelis
       const movies = infopeliculas()
        res.status(200).json({
            message: "Info pelis",
            data: movies
    })
}
}

