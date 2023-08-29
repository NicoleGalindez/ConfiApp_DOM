document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", function (event){
        event.preventDefault();
        const correo = document.querySelector("#correo").value;
        const contraseña = document.querySelector("#contraseña").value;
        const btn = document.querySelector("#btn");

        btn.addEventListener('onclick', inicio(correo, contraseña));
    })

        // Validar correo
        if(!validateEmail(correo)){
            alert("El correo no es válido");
            return
        }

        // Validar contraseña
        else if(contraseña.length < 8){
            alert("La contraseña debe tener al menos ocho caracteres.");
            return
        }

        function inicio(correo, contraseña){
            if(correo == "admin@gmail.com" && contraseña == '12345678'){
                document.body.style.backgroundColor="red";
            }
            else if(correo == correo && contraseña == '12345678'){
                document.body.style.backgroundColor="blue";
            }
            else console.log("No eres admin");
        }
        
    }
);
