/*    CODIGO ORIGINAL
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtiene los valores del formulario
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let bienvenido= document.querySelector(".bienvenida");
        console.log(bienvenido);
  
    // Realiza la validación de usuario y contraseña
    if (username === "adso2556678" && password === "adso2023") {
      // Si el usuario y la contraseña son correctos, redirige a la página principal
      window.location.href = "Home.html";
      alert("¡Formulario válido! Serás enviado a la lista de opciones para ingresar a ConfiApp.");
      
    } else {
      // Si el usuario y la contraseña son incorrectos, redirige al modal de registro
     window.location.href = "landing.html"; // dirije a la misma donde estan los botones de ins y registro
      alert(' Este usuario no existe, primero debes registrarte' ) ;
    }
});
*/


//___ tutor 
let bienvenidotut= document.getElementById('bienvenida');
let textobienvenidotut=document.getElementById('textobienvenida');
let rutascomunestut=document.getElementById('rutascomunes');
let comotrabajatut=document.getElementById('comotrabaja');
let titcuadroverdetut= document.getElementById('titcuadroverde');    

//___ menor 
let bienvenidomen= document.getElementById('bienvenida');
let textobienvenidomen= document.getElementById('textobienvenida');
let titcuadroverdemen= document.getElementById('titcuadroverde');
let textcuadroverdemen= document.getElementById('textcuadroverde');
let rutascomunesmen= document.getElementById('rutascomunes');
let comotrabajamen= document.getElementById('comotrabaja');


let decide = parseInt(prompt("Selecciona qué rol ocupas: 1 para Tutor, 2 para Menor ó 3 para modo invitado "));

     
        //_______TUTOR______________________________________________________________________

       if(decide===1){
            alert("Has ingresado como tutor");
             //-----menu:---------------


             //------contenido------------
            bienvenidotut.innerText=`Bienvenido nuevamente a confiApp `;
            textobienvenidotut.innerText=`¡Todos los días estamos trabajando duro para progresar, para que nuestra juventud esté llena de seguridad y confianza!`;
            rutascomunestut.innerText=`Rutas más frecuentes `;
            comotrabajatut.innerText=`¿Tienes dudas sobre como trabajamos?`;
            titcuadroverdetut.innerText=`¿Deseas saber más sobre notsotros? `;
           
             //------imagenes------------
            let imagen1tut=document.getElementById('imagenequipo1');
            console.log(imagen1tut.src);
            imagen1tut.src='assets/img/equipo.jpg'; // no la cambia


            let imgRuta1tut=document.getElementById('imgRuta1');
            console.log(imgRuta1tut.src);
            imgRuta1.src='assets/img/puntosmapas.jpg';

            let imgRuta2tut=document.getElementById('imgRuta2');
            console.log(imgRuta2tut.src);
            imgRuta2tut.src='assets/img/puntosmapas2.png';

            let imgRuta3tut=document.getElementById('imgRuta3');
            console.log(imgRuta3tut.src);
            imgRuta3tut.src='assets/img/puntosmapas4.jpg';
        
        } 
        // _______MENOR______________________________________________________________________
        else if (decide===2){
            alert('Has ingresado como menor');

                    //-----menu:---------------
            infopersonal.remove('Información personal');
            mimenor.remove('Mi menor');
            contactanos.remove('Contáctanos');  //.innerText=`Cerrar sesion`;

                //------contenido------------
            bienvenidomen.innerText=`Bienvenido, sientete seguro con confiApp `;
            titcuadroverdemen.innerText=`¿Por qué confiar en nosotros ? `;
            textcuadroverdemen.innerText=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, enim officiis. Dicta, et!`;
            rutascomunesmen.innerText=`Mi rutas recorridas`;
            comotrabajamen.innerText=`¿Quieres saber como trabajamos para tu seguridad?`;

            // // NO SE QUITAAAA  
            regismenor.remove('Registrar menor');
            // numeros.remove=('1962 Familias');
            // numeros.remove=('5347 Rurtas guardadas');
            // numeros.remove=('87 Condecoraciones');
            // numeros.remove=('25 Ciudades');
                //------imagenes------------
            


            let imagen1men=document.getElementById('imagenequipo1');
            console.log(imagen1men.src);
            imagen1men.src='assets/img/peopleworking.jpg';  // no la cambia




            let imgRuta1men=document.getElementById('imgRuta1');
            console.log(imgRuta1men.src);
            imgRuta1men.src='assets/img/puntosmapas.jpg';

            let imgRuta2men=document.getElementById('imgRuta2');
            console.log(imgRuta2men.src);
            imgRuta2men.src='assets/img/puntosmapas4.jpg';


            let imgRuta3men=document.getElementById('imgRuta3');
            console.log(imgRuta3men.src);
            imgRuta3men.src='assets/img/puntosmapas3.jpg';
        

        
 }
            else if(decide===3){
                alert('Has ingresado como invitado');

            }
            ;









































//_________________________________________________________________________________----
  // contenido   CONTENIDO
/*
//  bienvenido, menu y contenido dependiendo 1,2,3:
let ingresa;
do{
   ingresa=parseInt(prompt('QUIEN ERES? : dijite 1 si eres tutor,  2 si eres un adolecente o 3 si eres cualquier persona'));
   }while(ingresa!==1 && ingresa!==2 && ingresa!==3);
       if(ingresa===1){
           document.querySelector('.contenido-hero h1').textContent='Bienvenido tutor' ;

           //-----menu:---------------
           navegacion.children[0].textContent='menores';
           navegacion.children[1].textContent='rutas';
           navegacion.children[2].textContent='seguimiento';
           navegacion.children[3].remove('inicia sesion');
           //-----contenido:-----------
           //imagenes:
           //
            const imagen=document.querySelector('.card img2');
            console.log(imagen.src);
            imagen.src='img/hacer4.jpg';
    
            //
            const imagen1=document.querySelector('.card img');
            console.log(imagen.src);
            imagen.src='img/hacer4.jpg';
            //textos:

            //document.querySelector('.card categoria concierto ').textContent=' ciclo ruta nocturna? ' ;  // no seeeee
            document.querySelector('.hacer h2').textContent='¿Que deseas hacer hoy?' ;
            document.querySelector('.mi-viaje-plus').textContent='no se que  ba bla bla ';
            document.querySelector('.hacer  h3').textContent='je je je, je je je jejeje ';
            document.querySelector('.hospedaje h2 ').textContent='HOGAREEES BONIS BONIS ';
            document.querySelector('.destinos h2 ').textContent='lugares de ensueño ';
            document.querySelector('hacer h2 ').textContent='tampoco se que poner';
            // document.querySelector('.contenedor-cards categoria hospedaje').textContent='casa familiar, 3 habitaciones '; // no funciona?

            // document.querySelector('.contenedor-cards premium h3').textContent=' ooooh oooo ooooh ooooooh ooooh oooh  ' ;
            
       }
       else if(ingresa===2){
           document.querySelector('.contenido-hero h1').textContent='bienvenido adolecente ' ;

           //-----menu:------------------
           navegacion.children[0].textContent='ruta'
           navegacion.children[1].textContent='alertas'
           navegacion.children[2].textContent='s.o.s'
           navegacion.children[3].remove('inicia sesion');

           //-----contenido:-------------
           
           //textos:
           //document.querySelector('.card categoria concierto ').textContent=' ciclo ruta nocturna? ' ;  // no seeeee
           document.querySelector('.hacer h2').textContent='¿Queeeeeeeeeeeeeeeee?' ;
           document.querySelector('.mi-viaje-plus').textContent='123123123123123 ';
           document.querySelector('.hacer  h3').textContent='laaaaaaaaaa';
           document.querySelector('.hospedaje h2 ').textContent='casascasascasascasascasas ';
           document.querySelector('.destinos h2 ').textContent='lugares lugares lugares  ';
           document.querySelector('hacer h2 ').textContent='juuuummmm';

           // document.querySelector('.contenedor-cards categoria hospedaje').textContent='casa familiar, 3 habitaciones '; // no funciona?

           // document.querySelector('.contenedor-cards premium h3').textContent=' ooooh oooo ooooh ooooooh ooooh oooh  ' ;
       }
       else if(ingresa===3){
           document.querySelector('.contenido-hero h1').textContent='bienvenido a ConfiApp ' ;

           //-----contenido:
           
       }
       

       */
//___________


//________cambiar imagenes_______
// const imagen=document.querySelector('.card img');
// console.log(imagen.src);
// imagen.src='img/populares1.jpg';
//_______ para cambiar texto______________
// document.querySelector('.contenido-hero h1').textContent='Aprendices adso ...' ;


//________cambiar imagenes_______
//     // ___________________________
            
//     console.log(card.children);
//     console.log(card.children[3]);
//     console.log(card.children[3].src);
//     card.children[3].src='img/hacer1.jpg';
// //_________________________

// console.log(navegacion.firstChild);
// console.log(navegacion.firstElemtnChild);
//__------------------------------------------
