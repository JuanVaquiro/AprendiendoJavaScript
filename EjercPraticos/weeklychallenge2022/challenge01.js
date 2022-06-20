/*
* Reto #1
* ¿ES UN ANAGRAMA?
* Fecha publicación enunciado: 03/01/22
* Fecha publicación resolución: 10/01/22
* Dificultad: MEDIA
*
* Enunciado: Escribe una función que reciba dos palabras (String) 
* y retorne verdadero o falso (Boolean) según sean o no anagramas.
* Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
* NO hace falta comprobar que ambas palabras existan.
* Dos palabras exactamente iguales no son anagrama.
*/

anagrama('amor', 'roma')
anagrama('pepe', 'pepi')
anagrama('Amor', 'amores')
anagrama('Amor', 'amor')

function anagrama( palabraUno, palabraDos ) {
    if ( palabraUno.toLowerCase() === palabraDos.toLowerCase()){
            return console.log(false , 'las palabras son iguales')
    }   
    let arrUno = palabraUno.toLowerCase().split('').sort()
    let arrDos = palabraDos.toLowerCase().split('').sort()

    if ( arrUno.length === arrDos.length) {
       for ( let i = 0; i < arrUno.length; ++i ){
            if (arrUno[i] !== arrDos[i]) {
                return console.log(false , 'las palabras NO son anagramas')
            }
       } 
        return console.log(true , 'las palabras son anagramas');
    } else {
            console.log(false , 'las palabras son de diff longitud')
    }
}

// const equals = arrUno.every( ( character, i ) => character === arrDos[i])
// return console.log({ equals })



// Metodo arrays sort(fn) ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
// El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode

let arr = [1,2,15,4,3,22,12];
// console.log(arr);
// console.log(arr.sort( (a,b) => a - b) ) // [1, 2, 3, 4, 12, 15, 22];

let cosas = ['word', 'Word', '1 word', '2 Words', '3 Pepi'];
cosas.sort(); // ['1 word', '2 Words', '3 Pepi',  'Word', 'word']
// console.log(cosas)