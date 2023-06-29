/*const motero ={
    nombre:"Cristian Samir",
    apellido:"Narvaez",
    telefono: 317665403,
    detalle :function(){
        console.log(`El apellido del motero es ${this.apellido }`)
    }
}
console.log(motero)

motero.detalle();*/

//-------------------------------------------

/*
const libros = ['La iliada','La odisea','El Moro','El quijote','La Bbiblia'];
const meses = new Array ('Enero', 'Febrero', 'Marzo','Abril');

console.log(libros);
console.table(libros);
console.log(meses);
console.table(meses);
//---------------------
const datos= ['ADSO', 2556678, null, true,{nombre:'Manuel ', apellido:'Camacho', sexo:'de vez en cuando'}];
console.log(datos);
console.table(datos); 
console.log(datos[0],datos[1]); 
//_________________________________
 

const aprendices =['Luis','Jhonatan','Jhon','Damiel','Brayan'];
console.log(aprendices);

for(let z=0; z<5; z++)  {
    console.log(aprendices[z])
}
 
//--------------------------------------------
const libros = ['La iliada','La odisea','cien años de soledad','la maria'];
console.log(libros);
libros[10]=25000;
libros[4]="principito";
console.log(libros);
console.table(libros);


libros.push('la biblia');   //ultimo
console.table(libros);

libros.unshift('El primero de la lista');   //primero
console.table(libros);

*/
//__-------------------------------

/*
let nombre_tutor= prompt("Nombre del nombre tutor (1)");
console.log(nombre_tutor);
console.table

prompt= [{nombre_tutor}];

*/

//       const aprendiz1 = prompt("Aprendiz #1. ¿cual es tu nombre?");
//       const datos= ['ADSO', 2556678, null, true,{nombre:'Manuel ', apellido:'Camacho', sexo:'de vez en cuando'}];





//--------------------------------------



//_________________________EJERCICIO/ 04/05/23______________________ 
//alert('mensaje');
// const tutor = [
//   {
//     tutor1: prompt(" tutor digite su nombre"),
//     menor1: prompt("tutor digite nombre del menor"),
//   },
//   {
//     tutor2: prompt("tutor digite su nombre"),
//     menor2: prompt("tutor digite nombre del menor"),
//   },
//   {
//     tutor3: prompt("tutor digite su nombre"),
//     menor3: prompt("tutor digite nombre del menor"),
//   },
// ];





//----------------



//_________________________EJERCICIO/   05/05/23 _______________

/*

tutor.unshift({tutor3: prompt(" tutor digite su nombre"),
            menor3: prompt("tutor digite nombre del menor")});   //primero

tutor.push({tutor1: prompt(" tutor digite su nombre"),
            menor1: prompt("tutor digite nombre del menor")});     //ultimo

tutor[1]={tutor2: prompt("tutor digite su nombre"),
menor2: prompt("tutor digite nombre del menor")};

console.log(tutor);
console.table(tutor);
*/
 
// objeto 3 de primero 
// objeto 1 de ultimo


/*------------------------------------yo
tutor.unshift={
    tutor3: prompt("tutor digite su nombre"),
    menor3: prompt("tutor digite nombre del menor") };   //primero

tutor.push({tutor1: prompt(" tutor digite su nombre"),
            menor1: prompt("tutor digite nombre del menor")});     //ultimo

tutor[1]={tutor2: prompt("tutor digite su nombre"),
menor2: prompt("tutor digite nombre del menor")};

console.log(tutor);
console.table(tutor);
*/ //-------------------------




//    ______________________EJERCICIO______________________
const nombre =[];


const tutor ={
    nombre1:prompt("nombre tutor"),
    nombre2:prompt("nombre menor")

};

const tutor2={
    nombre3:prompt("nombre tutor"),
    nombre4:prompt("nombre menor")

};
const tutor3={
    nombre5:prompt("nombre tutor"),
    nombre6:prompt("nombre menor")

};




nombre.unshift(tutor3);
nombre.push(tutor2);
nombre.push(tutor);

console.table(nombre);

//___________________________