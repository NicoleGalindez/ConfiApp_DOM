alert("NOTAS DE APRENDICES");

const aprendiz1 = prompt("Aprendiz #1. ¿cual es tu nombre?");

let nota1 = prompt("Digita tu nota #1:");
nota1=Number.parseInt(nota1);

let nota2= prompt("Digita tu nota #2:");
nota2=Number.parseFloat(nota2);

let nota3 = prompt("Digita tu nota #3:");
nota3=Number.parseFloat(nota3);

console.log("Aprendiz:", aprendiz1 );

// nota 1
let porcentaje1;
porcentaje1= 0.2* nota1
console.log("Nota 1:", nota1)
// nota 2
let porcentaje2;
porcentaje2= 0.2* nota2
console.log("Nota 2:", nota2)
// nota 3
let porcentaje3;
porcentaje3= 0.6* nota3
console.log("Nota 3:", nota3)

let porcentajefinal;
porcentajefinal= porcentaje1 + porcentaje2 + porcentaje3 ;
porcentajefinal=Number.parseFloat(porcentajefinal);
console.log(`${aprendiz1} tu nota final es ${porcentajefinal}`);
//-----------------------------------------------------------------------------------
// aprendiz #2

const aprendiz2 = prompt("Aprendiz #2. ¿cual es tu nombre?");

let nota1_a2 = prompt("Digita tu nota #1:");
nota1_a2=Number.parseFloat(nota1_a2);

let nota2_a2= prompt("Digita tu nota #2:");
nota2_a2=Number.parseFloat(nota2_a2);

let nota3_a2 = prompt("Digita tu nota #3:");
nota3_a2=Number.parseFloat(nota3_a2);
console.log("Aprendiz:", aprendiz2 );

// nota 1
let porcentaje1_a2;
porcentaje1_a2= 0.2* nota1_a2
console.log("Nota 1:", nota1_a2)

// nota 2
let porcentaje2_a2;
porcentaje2_a2= 0.2* nota2_a2
console.log("Nota 2:", nota2_a2)

// nota 3
let porcentaje3_a2;
porcentaje3_a2= 0.6* nota3_a2 ;
console.log("Nota 3:", nota3_a2);

let porcentajefinal_a2;
porcentajefinal_a2= porcentaje1_a2 + porcentaje2_a2 + porcentaje3_a2 ;
porcentajefinal_a2=Number.parseFloat(porcentajefinal_a2);
console.log(`${aprendiz2} tu nota final es ${porcentajefinal_a2}`);
//-----------------------------------------------------------------------------------
// Aprendiz #3

const aprendiz3 = prompt("Aprendiz #3. ¿cual es tu nombre?");

let nota1_a3 = prompt("Digita tu nota #1:");
nota1_a3=Number.parseFloat(nota1_a3);

let nota2_a3= prompt("Digita tu nota #2:");
nota2_a3=Number.parseFloat(nota2_a3);

let nota3_a3 = prompt("Digita tu nota #3:");
nota3_a3=Number.parseFloat(nota3_a3);
console.log("Aprendiz:", aprendiz3 );

// nota 1
let porcentaje1_a3;
porcentaje1_a3= 0.2* nota1_a3 ;
console.log("Nota 1:", nota1_a3);
// nota 2
let porcentaje2_a3;
porcentaje2_a3= 0.2* nota2_a3;
console.log("Nota 2:", nota2_a3);
// nota 3
let porcentaje3_a3;
porcentaje3_a3= 0.6* nota3_a3;
console.log("Nota 3:", nota3_a3);

let porcentajefinal_a3;
porcentajefinal_a3= porcentaje1_a3 + porcentaje2_a3 + porcentaje3_a3 ;
porcentajefinal_a3=Number.parseFloat(porcentajefinal_a3);
console.log(`${aprendiz3} tu nota final es ${porcentajefinal_a3}`);








