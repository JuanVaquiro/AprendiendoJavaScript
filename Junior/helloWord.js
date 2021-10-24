//variables 
recipiente = "papel";

//imprimir en pantalla
alert(recipiente);

string = "texto";
number = 4;
boolean = true;

// datos especiales JS
// Undefined, Null, NaN  Not-A-Number (No es Un Número).

//declarar  variables
// var, let, const

const nombre3 = "juan"; // un dato constante que nunca cambia
var numero = 10;  // ocupa todo el epsacio de memoria
let num2 = 10; // es un epsacio de memoria limite

let nombre = prompt("cuales tu nombre");
alert("hola " + nombre);

let edad= prompt(" y cuales tu edad");
alert("tu edadad es  " + edad);

document.write(nombre + edad);

// 6) concatenacion 
saludo = "!hola juan!";
pregunta = "  ¿Como estas?";

frase = saludo + pregunta;
frase = `<div class="scanner"> ${frase}</div>`;
document.write(frase);

variable1 = "2";
variblle2    = 6;

frase2 = variable1.concat(variblle2); //concat un metodo de cadena
document.write(frase2);

//concatenacion con backtiks y la variable entre ${} -> `` = backtiks
frase3 = " juan ";
frase4 = " soy " + frase3 + " y me gusta programar  ";
scanner = frase3 + frase4;
scanner = `<div class="scanner"> ${scanner}</div>`;
document.write(scanner);

frase5 = `<div class="scanner"> backtiks ${frase3} prueba </div>`; 
document.write(frase5);

// operadores logicos  
//Equality 
let dato = 22;
let datoT = "22";
let dato2 = "texto";
let datoT1 = "texto";
let restltado = dato === datoT;
let restltado2 = dato2 == datoT1;
let restltado3 = `<div class="scanner"> 
    ${restltado} 
    ${restltado2}
    </div>`;

document.write(restltado);

//if

name1 = "juan david";
if (name1 == "juan") {
    alert("hola" + name1);
} else if (name1 == "juan david") {
    alert ("tu nombre es " + name1) 
} else {
    alert("tu nombre es otro");
}