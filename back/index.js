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


