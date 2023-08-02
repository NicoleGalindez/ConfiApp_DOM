


/*let formulario=document.querySelector('#formulario');
formulario.addEventListener("submit", function(event){
    event.preventDefault()
    const padre=solicitardatospadre();
    const menor=solicitardatosmenor();
    mostrardatospadres(solicitardatospadre);
    mostrardatosmenor(solicitardatosmenor);
})*/


function solicitardatospadre(){
    let identificacion = document.querySelector('#identificacion').value;
    let padre = document.querySelector('#padre').value;
    let apellidosp = document.querySelector('#apellidosp').value;
    let email = document.querySelector('#email').value;
    let parentesco = document.querySelector('#parentesco').value;
    let fecha = document.querySelector('#fecha').value;


    return {
        identificacion,
        padre,
        apellidosp,
        email,
        parentesco,
        fecha, 
    }
}

function solicitardatosmenor(){
    let menor = document.querySelector('#menor').value;
    let apellidosm = document.querySelector('#apellidosm').value;

    return {
        menor,
        apellidosm,
    }
}

function mostrardatospadres(padre){
    console.log("Datos del padre:");
    console.log("Cédula:", padre.identificacion);
    console.log("Nombre:", padre.padre, padre.apellidosp);
    console.log("Correo:", padre.email);
    console.log("Parentesco:", padre.parentesco);
    console.log("Fecha:", padre.fecha);


const edadTutor = calcularEdad(padre.fecha);
  
    console.log("edad tutor: " + edadTutor);
    if (edadTutor < 18) {
        alert("El tutor es menor de edad.");
        window.location.reload(); 
    }
      }
      


function mostrardatosmenor(menor){
    console.log("Datos del menor:");
    console.log("Nombre:", menor.menor);
    console.log("Apellidos:", menor.apellidosm);
}






let enviar = document.querySelector('#formulario');
enviar.addEventListener("submit", function(event){
    event.preventDefault();
    const padre = solicitardatospadre();
    const menor = solicitardatosmenor();
    mostrardatospadres(padre);
    mostrardatosmenor(menor);
});


function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    const mes = fechaActual.getMonth() - fechaNac.getMonth();
  
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
      edad--;
    }
  
    return edad;
  }


