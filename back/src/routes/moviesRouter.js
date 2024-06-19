const { Router } = require("express");
const moviescontroller = require("../controllers/moviecontroller")
const { movieValidation } = require("../middleware/moviesMiddleware")

const moviesrouter = Router();


moviesrouter.get("/", moviescontroller.getAllPosts);
moviesrouter.post("/", movieValidation, moviescontroller.createPost) //PARA POSTEAR

module.exports =  moviesrouter;




