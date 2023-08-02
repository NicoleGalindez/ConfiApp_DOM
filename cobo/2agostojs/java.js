const obtenerdatospadre = () => ({
    cedula: document.querySelector("#cedula").value,
    nombres: document.querySelector("#nombres").value,
    apellidos: document.querySelector("#apellidos").value,
    correo: document.querySelector("#correo").value,
    fechaNacimiento: document.querySelector("#fechaNacimiento").value,
    parentesco: document.querySelector("#parentesco").value,
});

const obtenerdatosmenor = () => ({
    nombreMenor: document.querySelector("#nombreMenor").value,
    apellidoMenor: document.querySelector("#apellidoMenor").value,
});

const imprimirConsola = (datosPadre, datosMenor) => {
    console.log("******** DATOS DEL PADRE RESPONSABLE **********");
    console.log("Cédula: " + datosPadre.cedula);
    console.log("Nombres del Padre: " + datosPadre.nombres);
    console.log("Apellidos del Padre: " + datosPadre.apellidos);
    console.log("Correo del Padre: " + datosPadre.correo);
    console.log("Fecha de Nacimiento del Padre: " + datosPadre.fechaNacimiento);
    console.log("Parentesco que tiene: " + datosPadre.parentesco);

    console.log("******** DATOS DEL MENOR **********");
    console.log("Nombres del Menor: " + datosMenor.nombreMenor);
    console.log("Apellidos del Menor: " + datosMenor.apellidoMenor);


};



const manejarFormulario = (event) => {
    event.preventDefault();
    const datosPadre = obtenerdatospadre();
    const datosMenor = obtenerdatosmenor();
    imprimirConsola(datosPadre, datosMenor);
};

const formulario = document.querySelector("form");
formulario.addEventListener("submit", manejarFormulario);




const boton = document.getElementById("boton");
const body = document.body;

boton.addEventListener("mouseover", () => {
    body.style.backgroundColor = "#DAFFFA";
    body.style.color = "black";
    body.classList.add("animate-body");

});

boton.addEventListener("mouseout", () => {
    body.style.backgroundColor = "lightgrey";
    body.style.color = "white";
    body.classList.add("animate-body");



});



