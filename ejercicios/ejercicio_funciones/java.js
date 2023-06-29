/*
const numero1 = 15 ;
const numero2 = '15' ;

console.log(numero1);
console.log(numero2);


console.log(typeof(numero1));
console.log(typeof(numero2));



console.log(numero1);
console.log(parseint(numero2));

console.log(typeof(numero2));

console.log();  //duncion va al inicio con argumentos

                //y el metodo va con punto

*/



// ___________parametros____ y ____argumentos___________ 

/*
function resta(a,b){
    console.log(a-b);
}

resta(45,10);   // asi se llama?  si
resta(15,8);
resta(50,80);
resta(10,10);
resta(5,3);

*/


//----------EJERCICIO---------------------------------------
// ruta
/*
function fecha (a,b){
        console.log(a,b);
}
fecha(22, 'de diciembre');

function hora (a,b,c){
    console.log(a,b,c);
}
hora(10, ':', 40 ,'pm');    

function lugar (){
    console.log();
}
lugar(); 

function menor (nombre, apellido){
    console.log(`bienbenid@ ${nombre} ${apellido} `);
}
menor('maria pepita');
*/



//-------------------------------


/* 
function menor (nom="USER ANONIMO ", apelL="SIN REGISTRAR "){
    console.log(`bienbenid@ ${nombre} ${apellido} `);
}
// menor('maria pepita');
menor();*/



//___________ como se comunican las fuciones__________
/*
function motero (){
    console.log('BIENBENIDO MOTERO')
}

function garaje (){
    console.log('usted en su garaje tiene 5 motos')

}

function sesion(){
    motero();
    garaje();
}

sesion();   // une funciones ---------
*/


// ----------------------------------
/*
function iniciosesion (usuario="sin autenticar"){
    console.log('estamos verificando su identidad ');
    console.log(`bienvenido ${usuario}`);

}
iniciosesion();

function bienvenido (){
    console.log('ya estas autenticado');
    iniciosesion('angela');
}
bienvenido();
*/


//____________retornar valores____________

/*
function sumar(a,b){
        console.log(a+b);
}
sumar(10,10)
*/
/*
function sumar(a,b){
    return a+b;
}

const resultado = sumar(5,8);
console.log(resultado);
*/
/*
let total=0;

function agregar(precio){
    return total +=(precio);
}
 function iva (){
    return total*1.19;
 }

 total=agregar(500);
 total=agregar(500);
 total=agregar(500);

 const totalPagar =iva(total);
 console.log(total);
 console.log (`el total a pagar es de ${totalPagar}`)
*/

 //________________añadir funciones en un objeto______


/*

const peliculas = {   //esto es un objeto
    drama: function(nombre){        //valor tipo funcion
        console. log(`Usted esá en el apartado de drama... ${nombre}`);
    },
    infantil: function(){
        console.log("Usted esá en el apartado infantiles...");
    },

        terror: function(){        //valor tipo funcion
            console. log("Usted esá en el apartado  de terror...");
        },
        gore: function(){
            console.log("Usted esá en el apartado de gore ...");
        },
        ficcion: function(){        //valor tipo funcion
            console. log("Usted esá en el apartado de ficcion...");
        },
        fantasia: function(){
            console.log("Usted esá en el apartado de fantasia...");
        },


}

peliculas.drama('y está viendo el silencio de los inocentes');
peliculas.infantil();
peliculas.terror();
peliculas.gore();
peliculas.ficcion();
peliculas.fantasia();
*/

//__________________EJERCICIO_____________

// 1 objeto con 5 funciones 
//   1. play,  2.stop, 3.pausa, 4.adelante y 5.atras 
//en ls 1 que diga : "usted dio play"
// en la 2 que diga: "usted dio stop"
// en la 3
// en la 4 que diga:  (siguiente)   y "usted paso a la siguiente cancion"
//en la 5  
/*
const acciones = {  
    play: function(){        
        console. log(`usted dio play... `);
    },
    stop: function(){
        console.log(" usted dio stop...");
    },

    pausa: function(){        
        console. log("usted ha dado pausa...");
    },
    adelante: function(nombre){
        console.log(`usted avanzará a la suiguiente cancion: ${nombre}`);
    },
    atras: function(nombre2){        
        console. log(`usted se devolverá a la anterior cancion: ${nombre2}`);
    },
}

acciones.play();
acciones.stop();
acciones.pausa();
acciones.adelante("smells like cherry");
acciones.atras("it's my life");
*/

//__________________funciones felcha________________


const aprender = function(){
    console.log('esto es una funcion normal');
}

aprender();

const aprender2 = ()=> 'esto es una funcion felcha '  ;

console.log(aprender2());


const aprender3 =(asignatura) => `estamos aprendiendo ${asignatura}`
console.log(aprender3('ciencias politicas'));


//_____________________ estructuras de control______________


const puntaje=3000;

if(puntaje==1000){
    console.log('si es igual a 1000')

}
else{
    console.log('no, esto no es igual')
}

