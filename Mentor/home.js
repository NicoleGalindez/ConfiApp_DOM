let lui = document.getElementById("lui");
/*console.log(lui.childNodes)
console.log(lui.children[1].textContent="Prueba")
console.log(lui.childNodes[2])
console.log(lui.childNodes[3].textContent="Prueba2")
console.log(lui.childNodes[4])*/

//console.log(lui.children[1].textContent="Preuba");
//console.log(lui.children[2].textContent="Preuba");

// Obtén una referencia al elemento <a> con la clase "active"
let enlace = document.querySelector("a.active");

// Cambia el texto del enlace a "Tutor"
enlace.textContent = "Inicio-Confiapp";

let enlace2 = document.querySelector("a.active2");
enlace2.textContent="Actividades del tutor"

let enlace3 = document.querySelector("a.active3");
enlace3.textContent="Mis Rutas"

//const navega = document.querySelector(".navbar")
//console.log(navega.children[0].children[0].textContent="Nuevo Inicio");



// Cambio de imagenes 

let imagen1=document.querySelector(".col-lg-6.order-1.order-lg-2 img")
imagen1.src="D:/asdasdasdadasd/1233456/ConfiApp/Mentor/assets/img/dia-del-padre-curiosidades.jpg";



const courseItem1 = document.querySelector('.course-item');
const image1 = courseItem1.querySelector('img');
image1.src = 'D:/asdasdasdadasd/1233456/ConfiApp/Mentor/assets/img/calcular-la-ruta.jpg';



const courseItem2 = document.querySelector('.course-item1');
const image2 = courseItem2.querySelector('img');
image2.src = 'D:/asdasdasdadasd/1233456/ConfiApp/Mentor/assets/img/policia.png';



const courseItem3 = document.querySelector('.course-item2');
const image3 = courseItem3.querySelector('img');
image3.src = 'D:/asdasdasdadasd/1233456/ConfiApp/Mentor/assets/img/compartiendo.jpg';



// cambio de texto //

const container = document.querySelector('.container');
const heading1 = container.querySelector('h1');
heading1.textContent = 'Bienvendio Tutor';

// cambio de texto heading //


const content = document.querySelector('.content');
const heading = content.querySelector('h3');
const paragraph = content.querySelector('p');
const listItems = content.querySelectorAll('li');

heading.textContent = 'Como Tutor puedes realizar lo siguiente';
paragraph.textContent = 'La seguiridad es lo importante';

listItems.forEach((item, index) => {
  const newText = ' las rutas confiables ' + (index + 1);
  item.textContent = newText;
});



// Otro texto //


const content1 = document.querySelector('.content3');
const heading2 = content1.querySelector('h33');
const paragraph2 = content1.querySelector('h34');


heading2.textContent="";
paragraph2.textContent=" ConfiApp es un proyecto con un componente móvil acompañado de un soporte web, que utiliza la tecnología para promover la seguridad y protección de los menores. Al permitir que los tutores establezcan rutas personalizadas y recibir alertas en tiempo real, se brinda una mayor tranquilidad y supervisión en los desplazamientos de los menores, garantizando su bienestar y proporcionando una herramienta efectiva para actuar rápidamente en caso de cualquier emergencia. ";






/*const courseItem = document.querySelector('.course-item');
const image = courseItem.querySelector('img');
image.src = 'D:/asdasdasdadasd/1233456/ConfiApp/Mentor/assets/img/calcular-la-ruta.jpg';



const courseItem1 = document.querySelector('.course-item1');
const image1 = courseItem1.querySelector('img1');
image.setAttribute('src', 'D:/asdasdasdadasd/1233456/ConfiApp/Mentor/assets/img/policia.png');*/







/*let imagen2 = document.querySelector(".course-item")
imagen2.src="D:/asdasdasdadasd/1233456/ConfiApp/Mentor/assets/img/calcular-la-ruta.jpg";*/

/*
const pimg = document.querySelector(".about")
console.log(pimg.children[0].src);
pimg.children[0].src ="D:/asdasdasdadasd/1233456/ConfiApp/Mentor/assets/img/familia1.jpg";*/