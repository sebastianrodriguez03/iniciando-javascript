//***Pedir datos */
/*
var nombre = prompt("ingrese su nombre");
console.log("Este es mi nombre",nombre);
alert(nombre); 
/*/

//** variables numericas */
var num=5;
console.log("num",num);

var palabras = "palabras";
console.log("palabras",palabras);


var activo =  true;
console.log("activo",activo);

var colores = ["red","cyan",activo,num];
console.log("colores",colores);


var vehiculo = {
    tipo:"Automovil",
    modelo:2018,
    usado: true
};

console.log("vehiculo",vehiculo);
console.log("tipo vehiculo",vehiculo.tipo);

var apellido="lola";
console.log("Apellido",apellido);
apellido=14;
console.log("Apellido numerico",apellido);

if(true){
    apellido=25;
    console.log("Apellido in if",apellido);
}
console.log("Apellido out if",apellido);

var cantidad=35;
console.log("Cantidad",cantidad);
if(true){
    let cantidad=40;
    console.log("Cantidad in if",cantidad);
}

console.log("Cantidad out if",cantidad);


const edad1=21;
console.log("edad",edad1);

edad1=45;
console.log("edad cam",edad1);


//** concandenacion de variables*/

var anio = 2018;
var promedio = "25";
console.log("la concatenacion de"+anio+"y"+promedio+"es"+anio+promedio,anio+Number (promedio));
 
let numero1 = 25;
let numero2 = 45;

console.log("La concatenacion es",String(numero1)+String(numero2));

//**ventanas*/
//alertas
alert("a concatenacion es");
//prome
 var modelo = prompt("el modelo es",2004);
 //conf
 var conf = confirm("desea salir de la aplicacion");
 console.log("Confirmacion",conf);