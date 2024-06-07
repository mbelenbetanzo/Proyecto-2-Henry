//MODULO EXPORT Y LO REQUIERE EL INDEX
const { elementos } = require ('./elementos');




const container = document.querySelector(".section__pelis");

const agregarContenedor = (data) => {
   
    const elementoshtml = data.map((pelis) => elementos(pelis));
    elementoshtml.forEach((pelis) => {
        container.appendChild(pelis)  
    })};

    module.exports = { agregarContenedor }