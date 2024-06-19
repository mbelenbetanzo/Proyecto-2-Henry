const { Router } = require("express");
const moviescontroller = require("../controllers/moviecontroller")

const moviesrouter = Router();//nuevo conserje, especilizado solo en rutas relacionadas con movies


//Le damos al conserje una tarea específica:
moviesrouter.get("/", moviescontroller.getAllPosts);
moviesrouter.post("/", moviescontroller.createPost) //PARA POSTEAR

module.exports =  moviesrouter;

//es un objeto que tiene varios controladores dentro nose nontendi
//solo barra porque ya accedi a las movies en el otro, se hace asi por ocnvencion, y aca solo se pone /
//ESTO DEFINE UNA RUTA, ES COMO DECIR CUANDO ALGUIEN VAYA A LA DIRECCION /MOVIES/ HAZ LO SIGUIENTE Y LLAMA AL CONTROLADOR
//QUE EJECUTE ESA FUNCION ESPECIFICA
//Cuando alguien hace una petición GET a /movies, moviesrouter.js usa getAllPosts para manejar esa petición.
/*moviescontroller.getAllPosts: Es una función específica que sabe cómo manejar una petición para obtener todas las 
publicaciones de películas.
Piensa en moviescontroller como un libro de instrucciones y getAllPosts es una página en ese libro que dice cómo hacer 
una tarea específica (como obtener todas las películas). */



