document.write("<div class=scanner>While :</div>");
let numeroSuma = 0;

while (numeroSuma < 5) {
    numeroSuma++;
    document.write(numeroSuma + "<br>");
}

//do
document.write("<div class=scanner>While Do :</div>");
do {
    document.write(numeroSuma + "<div></div><br>");
    numeroSuma++ ;
}

while (numeroSuma <= 10)

//Break 
document.write("<div class=scanner>Brack :</div>");
let numero =  0;
while (numero <  22) {
    numero++;
    document.write(numero);
    if (numero == 15) {
        break;
    }
}

document.write("fin" + "<br>");

//for 
document.write("<div class=scanner>FOR :</div>");
for (let i = 0; i <= 6; i++) {
    // const element = array[index];
    if (i == 3) {
        continue;  //leugo de obtener la condicion saltar y seguir la interacion
    }
  
    document.write(i + "<br>");
}
document.write("<br><div>Decremento :</div>");
for (let i = 6; i >= 0; i--) {
   
    if (i == 4) {
        continue;  
    }
  
    document.write(i + "<br>");
}

//for in
/* for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key]; 
    }
} */ 

document.write("<div class=scanner>FOR IN :</div>");
let animales = ["gato", "perro", "conejo"];
animales.edad = "grande";

 for (animal  in animales) {
     document.write(animal + "<br>" );
 }

 //for off
 /* for (const iterator of object) {     
}*/

document.write("<br><div>FOR OFF :</div>");
for (animal of animales) {
    document.write(animal + "<br>" );
}

document.write("<div class=scanner>Label :</div>");
Array1 = ["maria", "jose", "juan"];
Array2 = ["pedro", "marcelo", Array1, "sara"];

forLabel:  // sentencia label: indica el for padre
for (let array in Array2) {        // recorrer las posiciones del Array2
    if (array == 2){               // si esta en la posicion 2 => ejecute el sig for
        for(let array of Array1){  // recorrer los elementos del Array1
            //  continue forLabel; // salta la interacon del for hija y continua el for padre
            //  break forLabel;    // termina la iteracion del for padre
             break;                // termina la iteracio del for hijo
            document.write(array + "<br>");
        }
    }else {
         document.write(Array2[array] + "<br>");
    }
}
