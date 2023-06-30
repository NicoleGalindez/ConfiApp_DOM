/*
    <form id="loginForm">
        <div>
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" name="username">
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password">
        </div>
        <div>
            <button type="button" onclick="validateForm()">Iniciar sesión</button>
        </div>
    </form>
    <div id="errorContainer"></div>
    */
// __________________________
/*
Crea un archivo JavaScript llamado "script.js" en la misma carpeta que el archivo HTML y agrega la lógica de validación de usuarios.
javascript
Copy code
*/
//_________________________js_________________________________________________________________________________
/*
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar que los campos no estén vacíos
    if (username.trim() === "adso2556678" || password === "adso2023") {
        showError("Por favor, ingresa un nombre de usuario y una contraseña.");
        return;
    }
    // Aquí puedes agregar tus propias reglas de validación, como la longitud mínima de la contraseña, etc.

    // Si todo es válido, puedes redirigir al usuario a otra página o realizar alguna acción adicional.
    // Por ejemplo, mostrar un mensaje de éxito.
    alert("Inicio de sesión exitoso!");
}
function showError(message) {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = "<p>" + message + "</p>";
}
*/ //nada de esto arriba funcionó 
//__________________________________________________________



document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtiene los valores del formulario
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
   


// __tutor 
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










    // Realiza la validación de usuario y contraseña
    if (username === "adso2556678" && password === "adso2023") {
      // Si el usuario y la contraseña son correctos, redirige a la página principal
      window.location.href = "home.html";
      //alert("¡Formulario válido! Serás enviado a la lista de opciones para ingresar a ConfiApp.");
 



    }
    
    else if (username === "tutor123" && password === "adso2023") {
        // Si el usuario y la contraseña son correctos, redirige a la página principal
        window.location.href = "home.html";
        //alert("¡Formulario válido! Serás enviado a la lista de opciones para ingresar a ConfiApp.");
      

       alert("Has ingresado como tutor");
       // -----menu:---------------


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




    else if (username === "menor123" && password === "adso2023") {
        // Si el usuario y la contraseña son correctos, redirige a la página principal
        window.location.href = "home.html";
       // alert("¡Formulario válido! Serás enviado a la lista de opciones para ingresar a ConfiApp.");
       

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
    else {
      // Si el usuario y la contraseña son incorrectos, redirige al modal de registro
     window.location.href = "landing.html"; // dirije a la misma donde estan los botones de ins y registro
      alert(' Este usuario no existe, primero debes registrarte' ) ;
    }
});







//__________________________________________________________________________________________________________________




