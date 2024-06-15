const app = require ("./src/server.js");

const PORT = 3001;

app.listen(PORT, () => { 
    console.log("servidor iniciado en puerto 3001");
})
/*Se le dice a la aplicación Express (app) que escuche en el puerto 3001.
Cuando el servidor se inicia, se ejecuta la función que muestra el mensaje
 "servidor iniciado en puerto 3001" en la consola.
Este módulo esencialmente inicia tu servidor Express y lo pone a escuchar en el 
puerto 3001. */