

// let num=prompt('A que numero desea apostar  (valido del 1 al 10)' );
// let cant= prompt('cuanto desea apostar ');
let dinero=5000;

// let aleatorio=Math.floor(Math.random() * 10 + 1) ;
// alert(`el numero ganador fué ${aleatorio}` )
 
// let ganancia= cant*3;
// let perdida= dinero-cant;

while(dinero<10000 && dinero>0 ){

    let  num=prompt('A que numero desea apostar  (valido del 1 al 10)' );
    let cant= prompt('cuanto desea apostar ');
    
    let aleatorio=Math.floor(Math.random() * 10 ) ;
    alert(`el numero ganador fué ${aleatorio}` ) 
   
    

    if(num==aleatorio){
        let ganancia= (cant*3);
        alert(`ganaste ${ganancia} `);
    }

    else if(num!==aleatorio){
        let dinero= dinero-cant;
        alert(`perdiste y te quedan ${dinero} disponible para apostar`)  
    }
    

    // else if(dinero<10000 && dinero>0){
    //  num=prompt('A que numero desea apostar  (valido del 1 al 10)' );
    //  cant= prompt('cuanto desea apostar ');
    // }
} 











// let aleatorio=prompt('el numero que ganó fué:' (Math.random() *10+1 )  );



// ¿Cómo generar 10 números aleatorios en javascript?
// round(Math. random()*10); alert("Número aleatorio entre 0 y 10:"+aleatorio);}

// int numero = (int)(Math. random()*10+1)