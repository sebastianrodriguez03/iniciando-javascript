var edades = prompt("ingrese su edad");

function calcularEdad(edad){
 if(edad>=18){
    if(edad<=33){
    console.log("Eres un milenial");
 }
 else if(edad>=70){
    console.log("Eres un anciano");
 }
 else{
    console.log("ya no eres milenial");
 }
 }

 else {
    console.log("Es menor de edad");
 }
}
debugger
 calcularEdad(edades);
 calcularEdad(23);
 calcularEdad(89);
 calcularEdad(15);
 calcularEdad(67);