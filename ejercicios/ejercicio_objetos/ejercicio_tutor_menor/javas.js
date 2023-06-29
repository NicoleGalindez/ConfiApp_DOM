
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




//    ________________________05/05/23______________________




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