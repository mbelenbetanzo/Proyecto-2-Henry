const { Router } = require("express");
const moviescontroller = require("../controllers/moviescontroller")

const moviesrouter = Router();

//const { postcontroller } = require ("../controllers") YA NO

moviesrouter.get("/", moviescontroller.getAllPosts); //es un objeto que tiene varios controladores dentro nose nontendi

module.exports =  moviesrouter;