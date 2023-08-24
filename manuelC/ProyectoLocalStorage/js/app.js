const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-Tweets');
let Tweets = [];


eventlisteners();
function eventlisteners(){
    formulario.addEventListener('submit', agregartweet) ;
}


function agregartweet(e) {
    e.preventDefault();
    // console.log("Agregar tweet");



    const tweet = document.querySelector('#tweet').value;
    console.log(tweet);


    if(tweet === ''){
    mostrarError('El mensaje no puede ir vacio! ');
    return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet: tweet
    }

    Tweets = [...Tweets, tweetObj]
    crearHTML();
}

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    setTimeout( () => {
    mensajeError.remove();  }, 3000)
}

function crearHTML(){
    if(Tweets.length > 0) {
        Tweets.forEach((tweet) => {

            const li = document.createElement('li');
            li.textContent = tweet.tweet;
            listaTweets.appendChild(li)
        }

        )
    }
}

