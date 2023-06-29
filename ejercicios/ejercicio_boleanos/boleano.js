 /*  let boolean1 = true;
let boolean2 = false;


console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);
console.log(); 
   // ---------------
let sesion =false;
console.log(sesion? 'si esta aautenticado' : 'no esta autenticado');




// ------------------------
//   objetos


const moteros = {
        nombre:"eduin yesid",
        apellidos:"pardo   llll",
        correo:"yecid@moteros.co",
        celular: 3007895100,
        alias: "nee",
        correoalter:"motero2@nnnn.co",
        identificacion:"6446464"
}
console.log(moteros);


// agregar propiedad  
moteros.moto="yamaha";



// mostrar propiedad
console.log(moteros.celular);
console.log(moteros.correo);
console.log(moteros.moto);

console.log(moteros['identificacion']);


// borrar propiedad
delete moteros.alias;
delete moteros.correoalter;

console.log(moteros);




// asignar valor a las proopiedades 


      // extraido datos

//  const  nombre=moteros.nombre; 

// const {nombre} = moteros;
// const {celular} = moteros ;

const {nombre , apellidos , alias} = moteros ;

console.log(nombre);    
console.log(apellidos);
console.log(alias);


*/

/*

const moteros = {
    nombre:"eduin yesid",
    apellidos:"pardo   sanchez",
    correo:"yecid@moteros.co",
    celular: 3007895100,
    alias: "alias",
    correoalter:"motero2@nnnn.co",
    identificacion:"642464",
    motocicleta:{
        placa:"xsn-51c",
        modelo:"1987",
        marca: "la que ni existe",
        color:"arcoiris",
        foto: "moto1.jpg", 
    }
}
console.log(moteros);






const ficha="ADSO 2556678";


console.log(ficha);

console.log(moteros);


const {nombre, alias, motocicleta:{placa} }= moteros ;   // esto es un decostructor

console.log(nombre);
console.log(alias);
console.log(placa);  // nooooo   motocicleta:{placa}
// console.log(moteros.motocicleta.placa);


*/
//-------------------------------------------------------------

/*
"use strict";

const moteros = {
    nombre:"eduin yesid",
    apellidos:"pardo   sanchez",
    correo:"yecid@moteros.co",
    celular: 3007895100,
    alias: "alias",
    correoalter:"motero2@nnnn.co",
    identificacion:"642464",
    motocicleta:{
        placa:"xsn-51c",
        modelo:"1987",
        marca: "la que ni existe",
        color:"arcoiris",
        foto: "moto1.jpg", 
    }
}

console.log(moteros);

Object.seal(moteros);

delete moteros.correo;


*/


const motero = {
    nombre:prompt("tu nombre"),
    apellidp:"Narvaez",
    telefono:"310255635",
    

}

const moto ={
    placa:"placa",
    color:"rojo",
    modelo:"1213",

}
   
console.log(motero);
console.log(moto);


// unida con assing
const motero1 = Object.assign(motero, moto);
console.log(motero1);


//unido con llaves 
const motero2 = {...motero, ...moto};
console.log(motero2);





