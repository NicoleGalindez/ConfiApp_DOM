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
//------------------------------------
let p=(prompt ("dijita un numero"));

for (i=0;  i <= p  ; i++ ){
    console.log(i);
    if (p%p !== 0){
        console.log('no es valido')
    } 
    else if (i%3===0 && i%5===0){
        console.log(`${i}   PING PONG`);
    }
    else if (i%3 === 0 ){
        console.log(`${i}  PING`);
    }
    else if (i%5 === 0 ){
        console.log(`${i}  PONG`);
    }
}
    // else if(p=parseFloat){
    //     console.log(`digite un numero nuevamente`);
    // }
    // else{
    //     console.log(`digite un numero nuevamente`);
    // }


 