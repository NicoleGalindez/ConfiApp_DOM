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
    
   

    // Realiza la validación de usuario y contraseña
    if (username === "adso2556678" && password === "adso2023") {
      // Si el usuario y la contraseña son correctos, redirige a la página principal
      window.location.href = "home.html";
      alert("¡Formulario válido! Serás enviado a la lista de opciones para ingresar a ConfiApp.");
 



    }
    
    else if (username === "tutor123" && password === "adso2023") {
        // Si el usuario y la contraseña son correctos, redirige a la página principal
        window.location.href = "home.html";
        alert("¡Formulario válido! Serás enviado a la lista de opciones para ingresar a ConfiApp.");
  
   


      }




    else if (username === "menor123" && password === "adso2023") {
        // Si el usuario y la contraseña son correctos, redirige a la página principal
        window.location.href = "home.html";
        alert("¡Formulario válido! Serás enviado a la lista de opciones para ingresar a ConfiApp.");
    



      }
    else {
      // Si el usuario y la contraseña son incorrectos, redirige al modal de registro
     window.location.href = "landing.html"; // dirije a la misma donde estan los botones de ins y registro
      alert(' Este usuario no existe, primero debes registrarte' ) ;
    }
});







//__________________________________________________________________________________________________________________




