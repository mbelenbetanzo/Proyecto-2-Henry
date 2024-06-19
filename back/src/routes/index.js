const { Router } = require ("express");


const moviesrouter = require ("./moviesrouter"); 

const router = Router();


router.use("/movies", moviesrouter);
module.exports = router;
//"/movies": Es la ruta base. Significa que todas las rutas que empiecen con /movies
//serán manejadas por lo que pongamos después de la coma.
//Aquí estamos diciéndole al conserje: "Oye, cuando alguien pregunte por /movies,
//llévalos a este conjunto de habitaciones específicas (moviesrouter)".
//¿Qué hace router.use en palabras muy simples?
//router.use le dice al conserje (Router):
//"Usa este camino": Cada vez que alguien pregunte por /movies, llévalos a las habitaciones de películas (moviesrouter).

//aca hace destructuracion de una parte del objeto express, para no importarme todo el modulo
//Router es una parte de express que nos permite crear un mini sistema de rutas dentro de nuestra app
//ACA LO OBTENEMOS, LO "INVOCAMOS"
//aca se crea una nueva instancia de router, un router en express se utiliza para definir
//rutas separadas de la aplicacion principal, aca lo "contratamos"


/*Imagina que tienes una tienda. El Router es como una sección de la tienda, por ejemplo,
 la sección de juguetes. Cuando alguien entra en la tienda y va a la sección de juguetes,
 el Router se encarga de dirigir a esa persona a las estanterías correctas dentro de la sección de juguetes.
Tienda: Aplicación express.
Sección de juguetes: Router.
Estanterías de juguetes: Las rutas específicas dentro del Router. 
router.use("/movies", moviesrouter): Dice que todas las rutas que comiencen con /movies serán
manejadas por el conjunto de rutas moviesrouter.

¿Qué es un sistema de rutas?
Imagina que tu aplicación web es como una ciudad y cada página o funcionalidad es una casa diferente. 
Un sistema de rutas es como un mapa de la ciudad que dice cómo llegar a cada casa.

Rutas: Son caminos que llevan a diferentes partes de tu aplicación. Por ejemplo, /home lleva a la página
 de inicio, /about lleva a la página de "Acerca de nosotros", y así sucesivamente.
*/

