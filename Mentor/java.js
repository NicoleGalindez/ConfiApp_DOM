const prue = "adsoadso";
const prue1 = "12345678";
const prue2 = "tutor";
const menorrol = "menor";
const menornum = "adsoadso";
const menorpass = "12345678" ;
var image = document.getElementById("imgg1");




image.alt = "Descripción de la nueva imagen";

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let password1 = document.getElementById("campo1").value;
  let username = document.getElementById("juda").value;
  let password = document.getElementById("jud1").value;

  switch (true) {
    case username === prue && password === prue1 && password1 === prue2:
      $('#exampleModal').modal('hide');
      alert("Hola tutor");
     
      contenidot();
     
      break;
    case username === menornum && password === menorpass && password1 === menorrol:
      
    $('#exampleModal').modal('hide');
    alert("Hola menor");
      contenidom();
      break;
    default:
      alert('Este usuario no existe. Primero debes registrarte.');
      $('#exampleModal').modal('hide');
      $('#modalcito1').modal('show');
  }
});

// Función para mostrar el contenido para el rol de "menor"
function contenidom() {
  document.querySelector('#name1').textContent = 'Bienvenido Menor';
  image.src = "assets/img/Edicion_Ninos_Cyan.png";
 
 
  let enlace4 = document.querySelector("#active1");
enlace4.textContent = "Tus Fotos";

let enlace5 = document.querySelector("#active2");
enlace5.textContent="Historial de rutas"

let enlace6 = document.querySelector("#active3");
enlace6.textContent="Rutas Preferidas"
document.querySelector("#hh1").textContent="Bienvenido niñ@";
document.querySelector("#hh2").textContent="¡Bienvenido a nuestra increíble aplicación de cuidado de menores! Con nosotros, podrás experimentar un entorno seguro y lleno de diversión. Descubre nuevas actividades emocionantes y aprende cosas fascinantes junto a otros niños de tu edad.";
document.querySelector("#jj1").textContent="hola menor quiero que nos conozcas :)";
document.querySelector("#kk1").textContent="gente importante dando su opinion,conocelos tambien";
document.querySelector('#ll1').textContent = "¡Descubre nuestra emocionante aplicación de cuidado de menores diseñada especialmente para ti! Explora un mundo seguro y divertido lleno de actividades y juegos fascinantes.";
document.querySelector('#ll2').textContent ="Con nuestra aplicación, podrás aprender y crecer junto a otros niños de tu edad, mientras nuestros tutores te brindan apoyo y cuidado en todo momento.";
document.querySelector('#ll3').textContent ="Disfruta de aventuras increíbles y descubre nuevas experiencias, sabiendo que estamos aquí para asegurarnos de que te sientas protegido y feliz en cada paso del camino.";

const primerEnlace = document.querySelector('#ali'); 
 primerEnlace.remove();

 const primerEnlace2 = document.querySelector('#ada');
 primerEnlace2.remove();

}

// Función para mostrar el contenido para el rol de "tutor"

function contenidot() {
  document.querySelector('#name1').textContent = 'Bienvenido Tutor';
  image.src = "assets/img/dia-del-padre-curiosidades.jpg";
 
 
  let enlace4 = document.querySelector("#active1");
enlace4.textContent = "Tus menores";

let enlace5 = document.querySelector("#active2");
enlace5.textContent="crear rutas"

let enlace6 = document.querySelector("#active3");
enlace6.textContent="mensaje de tus menores"
document.querySelector("#hh1").textContent="Bienvenido Tutor";
document.querySelector("#hh2").textContent="Bienvenidos a nuestra aplicación de cuidado de menores, diseñada pensando en tu tranquilidad y seguridad. Con nuestra plataforma, puedes estar seguro de que tus seres queridos más pequeños estarán en buenas manos. Brindamos un entorno confiable y protegido, donde los tutores tienen acceso a herramientas de monitoreo y comunicación en tiempo real. Nuestra aplicación ha sido galardonada por su enfoque en la seguridad y protección infantil. Además, puedes acceder al Historial de Rutas para conocer los lugares por donde ha transitado el menor. Confía en nosotros y disfruta de la tranquilidad que te ofrecemos mientras cuidamos a tus seres queridos.";
document.querySelector("#jj1").textContent="hola tutor quiero que nos conozcas";
document.querySelector("#kk1").textContent="gente que quizas conozcas y han dado su opinion de nuestra app";
document.querySelector('#ll1').textContent = '"Nuestra aplicación de cuidado de menores te brinda la tranquilidad de saber que tus seres queridos más pequeños están protegidos en todo momento."';
document.querySelector('#ll2').textContent ="Con nuestras herramientas de monitoreo y comunicación en tiempo real, podrás estar al tanto de la ubicación y bienestar de tus hijos mientras están a cargo de sus tutores."
document.querySelector('#ll3').textContent ="Además, nuestra aplicación ha sido reconocida por su enfoque en la seguridad y protección infantil, brindándote la confianza necesaria para dejar a tus hijos en manos responsables y comprometidas."

const primerEnlace = document.querySelector('#ali');
 
 primerEnlace.remove();

 const primerEnlace2 = document.querySelector('#ada');
 
 primerEnlace2.remove();

}




