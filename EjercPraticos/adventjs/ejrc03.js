const carta1 = "bici coche (balón) bici coche peluche" ;//✅
const carta2 = "(muñeca) consola bici"; //✅
const carta3 = "bici coche (balón bici coche"; //❌
const carta4 ="peluche (bici [coche) bici coche balón"; //❌
const carta5 = "(peluche {) bici"; //❌
const carta6 = "() bici"; //❌


const isValid = (params) => {
    let palabra = params.split(' ');
    // palabra.some()
    return palabra
}
console.log(isValid(carta1))


function validar(caracter) {
    if (caracter.includes('(') && caracter.includes(')')) {
        if (caracter.includes('[') || caracter.includes('{') || caracter.includes('()')){
            return false;
        } else if (caracter.indexOf(')') > caracter.indexOf('(') ){
            return true;
        } else{
            return false;
        }
    }
    return false;
}

console.log(validar(carta3))


const isValid1 = (letter) => {
    const Symbols = ['(', ')', '[', ']', '{', '}'];
    const SymbolLetter = { '(': ')' };
    const Stack = []; 
    const Gift = []; 
    const ArrGifts = letter.trim().split('');
    ArrGifts.forEach((letter) => {
        if (letter === SymbolLetter[Stack[Stack.length - 1]]) {
            Stack.pop(letter);
        } else if (Symbols.includes(letter)) {
            Stack.push(letter);
        } else if (Stack.includes('(')) Gift.push(letter);
    });
    return !Stack.length  && Gift.length > 0;
};



function isValid(letter) {
    let characters = letter.split('')
    console.log(characters)
    let openParenthesis = 0
    let closeParenthesis = 0
 
    characters.map(character => {
       if (character === '(') {
          openParenthesis += 1
       } else if (character === ')') {
          closeParenthesis += 1
       }
    })
 
    if (openParenthesis === closeParenthesis &&
       openParenthesis > 0 &&
       closeParenthesis > 0 &&
       !letter.match(/[\[\[{}]/g) &&
       !letter.match(/[(]\W+[)]|[(][)]/)
    ) {
       return true
    } else {
       return false
    }
 }
 
 const isValidLetter = isValid(input)
 console.log(isValidLetter)