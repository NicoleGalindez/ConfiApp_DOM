
/*
[1, 2, 3, 4].forEach(function (item) {   
    console.log(item); 
});
const array1 = ['a', 'b', 'c'];


for (const element of array1) {
  console.log(element);}
  const object = { a: 1, b: 2, c: 3 };

  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
  const aarray1 = ['a', 'b', 'c'];

aarray1.forEach(element => console.log(element));
*/


// for loop (se ejecuta hasta que el codigo se deje de cumplir una condición)
/*
let i;

for (i =0 ;  i<= 20;  i++){
  console.log(`numero: ${i}` )
}
*/
//----------------------------------------------
       //par e impar 
/*
let y;

for( y = 0; y<= 50;  y++){
  if (y%2 === 0 ){
  console.log(`el numero ${y} es par`)}
    else{
      console.log(`el numero ${y}es impar`)

    }
}
*/
/*
const libros=[
  {nombre:'la iliada ', precio: 15000 , pasta: 'dura'},
  {nombre:'la odisea ', precio: 55000 , pasta: 'dura'},
  {nombre:'el principito ', precio: 70000 , pasta: 'plastificada'},
  {nombre:'psicoanalista ', precio: 95000 , pasta: 'dura'},
  {nombre:'cien años de soledad ', precio: 45000 , pasta: 'dura'},
]

console.log(libros[3]);
let i;
for (i=0 ;  i<libros.length ; i++){
  console.log(libros[i]);

}
for (i=0 ;  i<libros.length ; i++){
  console.log(`${libros[i].nombre}, libros[i].precio `);

}

*/
//----------------------------------------------------------
// nombre del padre con nombre del menor
/*
const tutores=[
  {padre:'pedro ', 
  menor: 'pepito' ,
   direccion: 'cra. 00 #00-00'},

  {padre:'maria ', 
  menor: 'miriam' ,
  direccion: 'cra. 00 #00-00'},
  
  {padre:'sandra ', 
  menor: 'valeria' ,
  direccion: 'cra. 00 #00-00'},

  {padre:'angela ', 
  menor: 'miguel' ,
  direccion: 'cra. 00 #00-00'},
]


let t;
for (t=0 ;  t<tutores.length ; t++){
  console.table(tutores[t]);
}
for (t=0 ;  t<=tutores.length ; t++){
  console.table(`tutor: ${tutores[t].padre}, y menor: ${tutores[t].menor}`);
}    //    ERROR LINEA ANTERIOR A ESTA?
*/

//-------------------------
/*
let i;
for ( i=0; i<=10; i++){
  console.log(i);
  if(i===5){
    console.log(`este es el numero ${i}`);
    break;
  }
}
for ( i=0; i<=10; i++){
  console.log(i);
  if(i===5){
    console.log(`este es el numero ${i}`);
    continue;
  }
}
*/
//---------ejm----
/*
const libros=[
  {nombre:'la iliada ', precio: 15000 , pasta: 'dura'},
  {nombre:'la odisea ', precio: 55000 , pasta: 'dura'},
  {nombre:'el principito ', precio: 70000 , pasta: 'plastificada'},
  {nombre:'psicoanalista ', precio: 95000 , pasta: 'dura'},
  {nombre:'cien años de soledad ', precio: 45000 , pasta: 'dura'},
]     // los arreglos siempre cuentan desde 0!!

console.log(libros);

for(i=0 ; i< libros.length;  i++){
    if (libros[i].pasta ==='plastificada'){
      console.log(`el libro ${libros[i].nombre}, tiene descuento en la tienda`)
        break;
    }
    console.log(libros[i].nombre);

}
*/

//_____________________while__________________________
/*
let i=0;
while (i<50){
  console.log(`el numero ${i}`); //condicion
  i++;  //incremetno
}
*/



// par e impar
/*
let x=0;
while (x<=20){
  if (x%2==0){
   
  }
}


//_____do while 

let i=0;
do {
  console.log(`los numeros en orden ${i}`);
  i++;
} while (i<10);
*/

//______________EJERCICIO______________________________
/*
// pide numero, si el numero 
// es par ejecuta, sino siga pidiendo

let i=0;
let x,y;
// do{
//   x=prompt ("dijita un numero entero");
//    i++;
// }while(x/x!==0 && x%2!==0 );

   
do {
      // while(i<=x){
      //   if(x/x!==0 && x%2!==0 ) { x=prompt ("dijita un numero entero");
      //       i++;}
      // }
  console.log(`${i}`);
       if (i%3===0 && i%5===0){
        console.log(`${i}   PING PONG`);
         }
    else if (i%3 === 0 ){
        console.log(`${i}  es PING`);
         }
    else if (i%5 === 0 ){
        console.log(`${i} es PONG`);
        }
  i++;

} while (i<=x);

*/


//   _______FOREACH
/*
let pendientes=['tarea', 'comer', 'estudiar','bañar...'];
pendientes.forEach(pendientes=>console.log(pendientes));


let pendientes1=['tarea', 'comer', 'estudiar','bañar...'];
pendientes.forEach((pendientes1, indic)=>{
  console.log(`${indic}: ${pendientes1}`);
});
*/

/*
const libros=[
  {nombre:'la iliada ', precio: 15000 , pasta: 'dura'},
  {nombre:'la odisea ', precio: 55000 , pasta: 'dura'},
  {nombre:'el principito ', precio: 70000 , pasta: 'plastificada'},
  {nombre:'psicoanalista ', precio: 95000 , pasta: 'dura'},
  {nombre:'cien años de soledad ', precio: 45000 , pasta: 'dura'},
]

libros.forEach((libro)=>{
console.log(libro.precio, libro.pasta, libro.nombre);
});   //forma normal
//  libros.forEach( (libro)=> console.log(libro.precio, libro.pasta));
// lo mismo pero froma con arrow funcion

libros.map((libro) =>{
  console.log(libro.nombre, libro.pasta);
});
*/



//________FOR OF________________
/*
let pendientes=['tarea', 'comer', 'estudiar','bañar...'];

for (let otra of pendientes){
  console.log(otra);

}


const libros=[
  {nombre:'la iliada ', precio: 15000 , pasta: 'dura'},
  {nombre:'la odisea ', precio: 55000 , pasta: 'dura'},
  {nombre:'el principito ', precio: 70000 , pasta: 'plastificada'},
  {nombre:'psicoanalista ', precio: 95000 , pasta: 'dura'},
  {nombre:'cien años de soledad ', precio: 45000 , pasta: 'dura'},
]

for(let biblioteca of libros){
  console.log(biblioteca);
}

for(let solouno of libros){
  console.log(solouno.nombre);
}
*/
//________FOR IN_______ objetos___

const libros1=[ {nombre:'la iliada ', precio: 15000 , pasta: 'dura'}];

for(let biblioteca1 in libros1){
  console.log(biblioteca1);
}

for(let [llave, valor] of objet.entries(libros1)){
  console.log( ...);

}
