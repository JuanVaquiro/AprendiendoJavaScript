/*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
*/

const main = () => {
  for (let i = 1; i <= 100; i++) {
    let multi3 = i % 3 === 0;
    let multi5 = i % 5 === 0;
    if (multi3 && multi5) {
      console.log("fizzbuzz");
    } else if (multi3) {
      console.log("fizz");
    } else if (multi5) {
      console.log("buzz");
    } else { 
      console.log(i);
    }
  }
};

// second try
function main1() {
    for (let index = 1; index <= 100; index++) {
        if ( index % 3 === 0 && index % 5 === 0 ) {
            console.log( index,  'FIZZBUZZ')
        }  else if (  index % 3 === 0 ) {
            console.log( index, "fizz");
          } else if ( index % 5 === 0 ) {
            console.log( index, "buzz");
          } else(
            console.log(index)
        )
    }
}

// three try
function main2(){
  for (let i = 1; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0 ? console.log(`fizz buzz`) 
    : i % 3 === 0 ? console.log(`fizz`) 
    : i % 5 === 0 ? console.log('buzz')
    : console.log(i);
  }
}

// main()
// main1()
// main2()
