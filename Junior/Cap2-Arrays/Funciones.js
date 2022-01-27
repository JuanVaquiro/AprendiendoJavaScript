function saludar() {
    // saludar = function()  asignar una funcion a una variable
    respuesta = prompt("hola! ¿como estas?");
    if(respuesta == "bien"){
        alert("me alegro");
    } else {
        alert("una pena");
    }
}

// paramentros
function suma(num1, num2) {
    let result = num1 + num2;
    return result;
}


function saludo(nombre) {
    let frase = `¡hola ${nombre}! ¿Como estas?`;
    document.write(frase);
}

// funcion en una variable
const saludo1 = function(nombre) {
    let frase = `¡hola ${nombre}! ¿Como estas?`;
    document.write(frase);
}

// funciones flechas
// const name = () => {}
const saludo2 = (nombre) => {
    let frase = `¡hola ${nombre}! ¿Como estas?`;
    document.write(frase)
}

// funcion abreviada de flechas con un paramentro y sentencias
// let nombre = "juan"; 
let frase = `¡hola ${nombre}! ¿Como estas?`;
const saludo3 = nombre => document.write(frase);


document.write("<div class=scanner>LLamar a la Function :</div>");

saludar();

let resultado = suma(12, 3);   
document.write("funcion suma " + resultado + "<br>"); 

saludo("david" );
document.write("<br>");
saludo1("diego");
document.write("<br>");
saludo2("juan");
document.write("<br>");
saludo3("diaz");


