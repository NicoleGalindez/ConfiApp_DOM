let  nota1 , nota2, nota3, media, calificacion; 

nota1= parseFloat(prompt  ("primer trimestre"));
nota2= parseFloat(prompt ("segundo trimestre"));
nota3= parseFloat(prompt ("tercer trimestre"));

media= (nota1 +nota2 +nota3)/3;
if (media<2.9 ){
  calificacion="aun no aprueba";  }

else if (media>=3 && media<= 4.5 ){
    calificacion="aprobado";}

else if (media >=4.6){
    calificacion="excelente"}
    alert ("calificacion media es : "+ calificacion );
    

