
const formulario = document.querySelector("#formulario");
const listatweets = document.querySelector("#lista-tweets");
let tweets = [];

addEventListeners();
function addEventListeners() {
  formulario.addEventListener("submit", agregarTweet);
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    console.log(tweets);
    crearhtml();
  });
}




function agregarTweet(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const Fmenor = document.querySelector("#Fmenor").value;
  
  const imagen = document.querySelector("#imagen").files[0]; 

  if (nombre === "" || Fmenor === "" || !imagen) {
    mostrarError("Debe completar todos los campos");
    return;
  }

  const tweetObj = {
    id: Date.now(),
    nombre,
    Fmenor,
    
    liked: false,
    imagenURL: URL.createObjectURL(imagen), 
  };

  tweets.push(tweetObj);
  crearhtml();
  formulario.reset();
}

function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  setTimeout(() => mensajeError.remove(), 3000);
}

function crearhtml() {
  limpiarhtml();
  tweets.forEach((tweet) => {
    const li = document.createElement("li");

    if (tweet.imagenURL) {
      const img = document.createElement("img");
      img.src = tweet.imagenURL;
      img.alt = "Imagen subida";
      img.style.maxWidth = "400px";
      li.appendChild(img);
    }

    const infoContainer = document.createElement("div");
    infoContainer.textContent = `Nombre: ${tweet.nombre} | Fmenor: ${tweet.Fmenor}`;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    buttonsContainer.style.display = "flex";

    const botonlike = createButton(tweet.liked ? "fas fa-heart red" : "far fa-heart", () => toggleLike(tweet));
    const botonborrar = createButton("borrar-tweet", () => borrarTweet(tweet.id), "X");




    
   //////// contador de likes //////////////////////////////////

   
    const botonContador = createButton("far fa-thumbs-up", () =>incrementar())
    
    const contadorspam = document.createElement("span");
    contadorspam.textContent=0;

    botonContador.appendChild(contadorspam);

    let conta = 0;

    function incrementar () {
      conta++;
      contadorspam.textContent=conta.toString()
    } 



    
  //////// contador de dislikes ////////////////

    const botonContador1 = createButton("far fa-thumbs-down", () =>decrementar())
    
    const contadorspam1 = document.createElement("span");
    contadorspam1.textContent=0;

    botonContador1.appendChild(contadorspam1);

    let conta2 = 0;

    function decrementar (){
      conta2++;
      contadorspam1.textContent=conta2.toString()
    }
    
    //////// Botones////////////////////////////

    buttonsContainer.appendChild(botonlike);
    buttonsContainer.appendChild(botonborrar);
    buttonsContainer.appendChild(botonContador);
    buttonsContainer.appendChild(botonContador1);

    li.appendChild(infoContainer);
    li.appendChild(buttonsContainer);

    listatweets.appendChild(li);
  });
  agregarStorage();
}


function createButton(iconClass, onClick, text = "") {
  const button = document.createElement("button");
  button.innerHTML = `<i class="${iconClass}"></i> ${text}`;
  button.onclick = onClick;
  button.style.verticalAlign = "middle";
  return button;
}

function agregarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearhtml();
  agregarStorage();
}

function limpiarhtml() {
  listatweets.innerHTML = "";
}

function toggleLike(tweet) {
  tweet.liked = !tweet.liked;
  crearhtml();
  agregarStorage();
}