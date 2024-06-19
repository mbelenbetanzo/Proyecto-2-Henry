const app = require ("./src/server.js");
const { dbCon } = require("./src/config/dbCon")



dbCon()
.then(() => {
    app.listen(3002, () => { 
        console.log("servidor iniciado en puerto 3001");
    })
})
.catch((err) => {
    console.log(err);
})


/*Se le dice a la aplicación Express (app) que escuche en el puerto 3001.
Cuando el servidor se inicia, se ejecuta la función que muestra el mensaje
 "servidor iniciado en puerto 3001" en la consola.
Este módulo esencialmente inicia tu servidor Express y lo pone a escuchar en el 
puerto 3001. */