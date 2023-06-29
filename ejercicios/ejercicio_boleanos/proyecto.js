const tutor= {
        nombre:prompt("TUTOR: Digita tu nombre"),
        apellido:prompt("TUTOR: Digita tu apellido"),
        tipo_de_identificacion: prompt("TUTOR: Tipo de identificacion"),
        identificacion: Number.parseInt( prompt("TUTOR: Digita tu numero de identificacion")), 
        edad:Number.parseInt( prompt("TUTOR: Digita tu edad")),
        ocupacion: prompt("TUTOR: cual es tu ocupacion?"),
        parentesco: prompt("TUTOR: cual es tu parentesco con el menor?"),

//------------------------MENOR------------------------------------------
        datos_menor: {
            nombre_menor:prompt("TUTOR: Digita nombre del menor"),
            apellido_menor:prompt("TUTOR: Digita apellido del menor"),
            tipo_de_identificacion_menor: prompt("TUTOR: Tipo de identificacion del menor"),
            identificacion_menor:Number.parseInt(  prompt("TUTOR: Digita numero de identificacion del menor")), 
            edad_menor:Number.parseInt(  prompt("TUTOR: Digita edad del menor")),
            colegio_menor: prompt("TUTOR: en que colegio estudia el menor?"),
        }

 }




console.log(tutor);

//--------------------------RUTAS---------------------------------------

const ruta = {
    lugar_de_inicio_ruta:prompt("TUTOR: Lugar donde inicia el reorrido"),
    lugar_de_fin_ruta:prompt("TUTOR: Lugar donde termina el reorrido"),
    fecha_ruta: Number.parseInt(  prompt("TUTOR: fecha de la ruta ")),
    medio_transporte:prompt("En que medio de tranporte va el menor"),
    
    

         
         


}

let hora_inicial_ruta=Number.parseInt (   prompt("TUTOR: Digita la hora en que inicia la ruta"));
let hora_final_ruta=Number.parseInt(   prompt("TUTOR: Digita la hora en que finaliza la ruta"));
let tiempo= (hora_inicial_ruta - hora_final_ruta);

ruta.duracion_ruta= ("tiempo recorrido en la ruta" ,  tiempo + "horas");


console.log(ruta);


//unido con llaves 
const tutor_ruta = {...tutor, ...ruta};
console.log(tutor_ruta);

