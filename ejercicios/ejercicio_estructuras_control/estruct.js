
/*
const edad=prompt('digite su edad');
if (edad>=18)
{ console.log(`eres mayor de edad`)}

else
{ console.log(`eres menor de edad`)}
*/

//------------------------------
/*
const puntaje= 1000;

if (puntaje!==1000){
    console.log('si es diferente a 1000')
}
else { console.log(`es igual`)}



const dinero=10000;
const factotal= 15000;

if (dinero > factotal){
    console.log(`el dinero si te alcanza`)
}
else {
    console.log(`no es suficiente`)
}
*/
//----------------------------------------------
// ELSE IF
/*
const dinero =10000;
const factotal=20000;
const tarjeta= true;
const tarcredito= true;
const cheque= true;

id (dinero >=factotal)
{
    console.log(`el dinero si alcanza`)
}

else if  (tarjeta)
{
    console.log(`puedo pagar porque tengo tarjeta`);
}

else if (tarcredito) {
    console.log(`puedo pagar porque tengo tarjeta de credito`);
}

else if (cheque) {
    console.log(`puedo pagar porque tengo cheque`);
}

else { 
    console.log(`no es suficiente`);
}

*/

//------------------------
//      SWITCH
/*
const metodoPago= 'tarjeta de credito'

swithch (metodoPago){
        case 'efectivo':
        console.log(`el pago fue realizado con ${metodoPago}`);
        break;
        case 'cheque':
        console.log(`el pago fue realizado con ${metodoPago}`);
        break;
        case 'tarjeta':
        console.log(`el pago fue realizado con ${metodoPago}`);
        break;
        case 'tarjeta de credito':
        PageTransitionEvent();
        break;
        default:
        console.log(`no has seleccionado metodo de pago o no esta soportado`)
};
*/
//-----------------------
//  &&  y  OR(||)
/*

const usuario=false;
const puedepagar=true;
const transporte=false;

if (usuario){
    console.log('si este es el usuario')
}
else { 
    console.log('no es el usuario');
}

if (usuario && puedepagar){
    console.log('el usuario no puede comprar')
}
else {
    console.log('el usuario no puede comprar')
}
/*
const usuario=true;
const puedepagar=false;


if (usuario){
    console.log('si este es el usuario')
}
else { 
    console.log('no es el usuario');
}

if (usuario || puedepagar){
    console.log('el usuario no puede comprar')
}
else {
    console.log('el usuario no puede comprar')
}

*/
//------------------------------
/* 
const usuario=false;
const puedepagar=true;
const transporte=false;

if (usuario && puedepagar){
    console.log('el usuario no puede comprar')
}
else if(!usuario){
    console.log('el usuario no puede comprar')
}
else if (!puedepagar){
    console.log(`no eres usuario debes registrarte `)
}
else if (!transporte){
    console.log(`coja taxi... `)
}
else{
    console.log(`el usuario no puede comprar`)
}
*/



const efectivo=1000;
const credito=5000;
const dispnible=efectivo+credito;

totalpagar =3000;
/*
if (efectivo> totalpagar){
    console.log(`si puedes pagar `);
}
else {
    console.log(`no puedes pagar`)
}
*/
// usando or

if (efectivo > totalpagar || credito>totalpagar){
    console.log(`si puedes pagar`);
}
else{
    console.log(`no puedes pagar`);
}

