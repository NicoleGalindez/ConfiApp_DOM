/*function iniciosesion(){
    let nombre = prompt('ingresa tu nombre')
    return`hola bienvenido , ${nombre}`;
}
    alert(iniciosesion());
    console.log(iniciosesion());
*/

   //funcion flecha
  /* const iniciosesion1= ( nombre)=> {
    return `hola bienvenido, ${nombre}`;
   }

   const iniciosesion2= ( nombre= prompt('tu nombre'))=> {
    return `hola bienvenido, ${nombre}`;
   }
console.log(iniciosesion2('javier lozada'));

*/



//funcion flecha normal
 /*const getuser1=()=>{
    return{
        udi:'abcd123',
        username:'lala',
    };
 }
 console.log(getuser1());



/////////////////////////////////////forma simplicficada

 const getuser2=()=>{
    ({
        udi:'abcd123',
        username:'lala',
    });
 }
 console.log(getuser2());
*/


/// ejrcicio

/*function getUsuarioActivo(nombre){
    return{
        uid:'ABCD678',
        username:nombre
    }
};

const usuarioActivo =getUsuarioActivo('javier lozada');

console.log(usuarioActivo);
*/

/*const getusuarioactivo1=(nombre)=>
({
    uid:'ABCD678',
    username:nombre
});
const usuarioActivo1=getusuarioactivo1('angela sofia')
console.log(usuarioActivo1);*/

//desestructurar

/*const aprendiz={
    nombre:'manuel',
    apellido:'camacho',
    edad:'22años',
    ficha:'2556678',
    programa:'adso',
};
console.log(aprendiz);
 /*
 const{nombre, edad, ficha}= aprendiz;

console.log(nombre);
console.log(edad);
console.log(ficha);
console.log(aprendiz);


console.log(aprendiz.nombre);


////

const retornaaprendiz=(usuario)=>{
    const{nombre,edad,apellido}=aprendiz
    console.table(nombre,edad)

}
retornaaprendiz(aprendiz);

//////desestructurada siemplificada

const retornaaprendiz=({nombre,edad,apellido})=> {
    console.table(nombre,edad,apellido)
}
retornaaprendiz(aprendiz);*/
/*
const confiapp={
    nombre:'manuel',
    parentesco:'hijo',
    id:'1234567',
    
};

console.log(confiapp);

const deses=({nombre,parentesco,id})=>{
    console.log(nombre,parentesco.id)
}
deses(confiapp);*/

/////////////////
/*
const confiapp={
    nombre:'manuel',
    parentesco:'hijo',
    id:'1234567',
    
};

console.log(confiapp);

/*const deses=({nombre,parentesco,id})=>{
    console.log(nombre,parentesco,id,hora="10:20", transporte="bus")
}
deses(confiapp);*/







 
///////////agregar detalles
/*
const usecont=({nombre, programa, sexo='masculino'})=>{
    return{
        nombreAP1:nombre,
        formacion:programa,
        detalles:{
            raza:'blanco',
            altura:1.75
        }
    }
}
const{nombreAP1, formacion, detalles:{raza, altura}}=usecont(aprendiz);
console.log(nombreAP1,formacion);
console.log(raza, altura);*/







//desestructuracion de arreglo



/*const menores=['andres', 'fernando',  'maria'];
console.log(menores);
console.log(menores[2]);
console.log(menores[1]);
console.log(menores[0]);

/*const[men1]= menores;
console.log(men1);

const[  ,  , men2]= menores;
console.log(men2);
*/



/*
const confia=['menor', 'sofia','14años'];
console.table(confia);

const retorna= () =>{
    return['andfres','fernansdo', 'maria'];
}

const[pos1, pos2, pos3]=retorna();
console.log(pos1, pos2, pos3);
*/

/*const usestate=(valor)=>{
    return[valor, () => {console.log('el usuario esta activo')}];}

const arr= usestate('andres');
console.log(arr);
arr[1]();



////desestructuracion

const usestate1=(valor)=>{
    return[valor, () =>
         {console.log('el usuario esta activo')}];}


const[nombre,setnombre]=usestate1('javier');
console.log(nombre);
setnombre();*/


//eventos
//add= adicionar event= evento

document.addEventListener('DOMcontentLoaded',()=>{
    console.log('documento listo')
});

const nav=document.querySelector('.texto');
nav.addEventListener('click',()=>{
    console.log('le diste clic en el texto')
});

const nav1=document.querySelector('.texto');
nav.addEventListener('mouseover',()=>{
    console.log('estas sobre el texto')
});

const nav2=document.querySelector('.texto');
nav.addEventListener('mouseout',()=>{
    console.log('estas por fuera del texto')
    nav2.computedStyleMap.backgroud='white';
});
  const buscar=document.querySelector('busqueda');

  buscar.addEventListener('keyup',()=>{
console.log('soltaste la tecla')
  });

  // evento para cuando presiona suelta o hace cualquier movimiento
  const buscar2=document.querySelector('busqueda');
  buscar2.addEventListener('blur',()=>{
    console.log('hiciste click por fuera y se usa una validacion')
  })



  const buscar3=document.querySelector('busqueda');
  buscar3.addEventListener('input',(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.target.value);
  })
  

  // eventos en el submit en un formulario


  const formulario=document.querySelector('.formulario');
  formulario.addEventListener('submit',(evt) =>{
    evt.preventDefault();  // previene  el comportamiento por defecto en el submit recarga
    console.log(evt.target.action);
  })


  //eventos en el scroll
  window.addEventListener('scroll',() =>{
  console.log('estas en el scroll');
  })


  window.addEventListener('scroll',() =>{
    const scrollPX= window.scrollY;
    console.log(scrollPX);
    })
  

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if (ubicacion.top<100){
        console.log('estas en la seccion premium');
    }
    else{
        console.log('no estas  en la seccion premium');
    }


    //prevenir evento bubbling

    const padre2 =document.querySelector('.padre');
    padre2.addEventListener('click,', (e)=>{
        if(e.target.classList.contains('padre')){
            console.log('estas en el padre');
        }
        if(e.target.classList.contains('hijo')){
            console.log('estas en el hijo'); 
        }
    })



    
// autenticacion de inicio de sesion de roles hacer un  formulario que tnga correo electronico y contraseña una clave de minimo 8 carcateres tiene que tener una validacion de correo electronico valido sino diga ingrese correo valido la contraseña sino tiene  dijitos aparecera en error 
// admin admin@gmail.com
//al iniciar sesion se caMBIA EL color de fondo


