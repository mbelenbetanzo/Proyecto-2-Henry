
const { agregarContenedor } = require ('./agregarcontenedor');

$.get("https://students-api.up.railway.app/movies", (data) => {
    agregarContenedor(data)
});






 
    

