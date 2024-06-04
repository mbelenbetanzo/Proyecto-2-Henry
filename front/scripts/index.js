console.log(tempData);

const container = document.querySelector(".section__pelis");

//const pelis = tempData

const elementos = (tempData) => {

    const { title, year, director, duration, genre, rate, poster  } = tempData;

    //const mapeo = tempData.map((item) => {

    const card = document.createElement("div");
    const titulo = document.createElement("h3");
    const ano = document.createElement("h4");
    const imagen = document.createElement("img");
    const directorr = document.createElement("h4");
    const duracion = document.createElement("h4");
    const genero = document.createElement("h4");
    const puntuacion = document.createElement("h4");

    card.classList.add("section__pelis__card") //para darle estilo en css
    titulo.classList.add("section__pelis__title");
    ano.classList.add("section__pelis__description")
    directorr.classList.add("section__pelis__description")
    duracion.classList.add("section__pelis__description")
    genero.classList.add("section__pelis__description")
    puntuacion.classList.add("section__pelis__description")
    imagen.classList.add("section__pelis__img")

    titulo.innerText = title;
    ano.innerText = year;
    imagen.src = poster;
    directorr.innerText = director;
    duracion.innerText = duration;
    genero.innerText = genre;
    puntuacion.innerText = rate;

    card.appendChild(titulo);
    card.appendChild(ano);
    card.appendChild(imagen);
    card.appendChild(directorr);
    card.appendChild(duracion);
    card.appendChild(genero);
    card.appendChild(puntuacion);

    return card;
}

const agregarContenedor = (tempData) => {

    
    //container.innerHTML = "";
    
    const elementoshtml = tempData.map((pelis) => elementos(pelis));
    elementoshtml.forEach((pelis) => {
        container.appendChild(pelis)
   
    })};


   document.addEventListener("DOMContentLoaded", (e) => {
        //e.preventDefault();
        agregarContenedor(tempData)
     });
    

