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
  for (let i = 0; i <= 100; i++) {
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


main()