alert("FACTURA DE COMPRA DE 4 PRODUCTOS");
console.log("supermercado asdo");

const nombre = prompt("cual es tu nombre");

const producto1 = prompt("Digite el producto numero 1 a comprar");
let precio1 = prompt("precio unitario");
precio1= Number.parseInt(precio1);

let cadena1 = "FACTURA DE VENTA No.001";
console.log(cadena1);
console.log(producto1 , precio1);


const producto2 = prompt("Digite el producto numero 2 a comprar");
let precio2 = prompt("precio unitario");
precio2= Number.parseInt(precio2);
console.log(producto2 , precio2);

const producto3 = prompt("Digite el producto numero 3 a comprar");
let precio3 = prompt("precio unitario");
precio3= Number.parseInt(precio3);
console.log(producto3 , precio3);

const producto4 = prompt("Digite el producto numero 4 a comprar");
let precio4 = prompt("precio unitario");
precio4= Number.parseInt(precio4);
console.log(producto4 , precio4);


//    subtotal  //
let subtotal= (precio1 + precio2 + precio3 + precio4);
console.log("EL SUBTOTAL DE LA FACTURA ES:", subtotal);


//    decuento   //
let descuento=( subtotal * 0.10);
console.log("EL DESCUENTO DE LA FACTURA ES:" , descuento);


//   iva    //
let iva= (subtotal* 0.19);
console.log("EL IVA DE LA FACTURA ES:" , iva);


// total
let total= (subtotal - descuento + iva );
console.log(`EL TOTAL A PAGAR POR EL SEÑOR, ${nombre}, DE LA FACTURA ES, ${total}`);
