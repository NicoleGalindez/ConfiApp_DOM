document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", function (event){
        event.preventDefault();

        //  ----------------------  ---------------------- Definir Valores del Padre  ----------------------  ----------------------
        const cedulaPadre = document.querySelector('#cedula').value
        const nombresPadre = document.querySelector('#nombres').value
        const apellidosPadre= document.querySelector('#apellidos').value
        const correoPadre = document.querySelector('#correo').value
        const fechaPadre = document.querySelector('#fecha').value
        const parentescoPadre = document.querySelector('#parentesco').value

        // ---------------------- ---------------------- Validar fecha ---------------------- ----------------------

        const fechaNacimiento = new Date(fechaPadre);
        const fechaLimite = new Date('2005-01-01'); // Fecha límite: 1 de enero de 2005
        if (fechaNacimiento >= fechaLimite) {
          alert('El padre debe ser mayor de edad para enviar el formulario.');
          return;
        }

        //  ----------------------  ---------------------- Imprimir Datos Padre  ----------------------  ----------------------

        console.log('--- ESTOS DATOS SON DEL TUTOR ---');
        console.log('Cédula :' + cedulaPadre);
        console.log('Nombres :' + nombresPadre);
        console.log('Apellidos :' + apellidosPadre);
        console.log('Correo :' + correoPadre);
        console.log('Fecha :' + fechaPadre);
        console.log('Parentesco :' + parentescoPadre);

        

    // ------------------------------------------------------------------------------------------------------------

    //  ----------------------  ---------------------- Definir los Valores del Menor  ----------------------  ----------------------

    const nombreMenor =  document.querySelector('#nombresMenor').value
    const apellidosMenor = document.querySelector('#apellidosMenor').value

    //  ----------------------  ---------------------- Imprimir Datos Hijo  ----------------------  ----------------------

        console.log('--- ESTOS DATOS SON DEL MENOR ---');
        console.log('Nombres :' + nombreMenor);
        console.log('Apellidos :' + apellidosMenor);

    })


});
