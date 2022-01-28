// Métodos Arrays 

// El método pop( ) 👉 elimina el último elemento de un array y lo devuelve. 
// Este método cambia la longitud del array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'cilantro', 'tomate'];

console.log(plants.pop()); // tomate

plants.pop();
resultado = plants; // asignar['broccoli', 'cauliflower', 'cabbage']

const popped = plants.pop();
console.log(popped); // cabbege

document.write("<div class=scanner> pop( )</br>" + resultado +"</div>"); // output['broccoli', 'cauliflower']


// El método shift( ) 👉 elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
const miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

console.log('miPescado antes: ' + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

let eliminado = miPescado.shift();

console.log('miPescado después: ' + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log('Elemento eliminado: ' + eliminado);
// "Elemento eliminado: ángel"


// El método push( ) 👉 añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
const anade = ['jj','kk',];
anade.push('dj');
console.log(anade);
resultado2 = anade.push('yy');
document.write("<div class=scanner> push( )</br>" + resultado2, "<br>",  anade +"</div>"); // output['broccoli', 'cauliflower']


// El método unshift( )👉 agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
const array1 = [1, 2, 3];   
console.log(array1.unshift(4,7));
document.write("<div class=scanner> unshift( )</br>" + array1 +"</div>");


// El método reverse( )👉 invierte el orden de los elementos de un array.
let invierte = [1, 2, 3, 4, 5];
console.log(invierte); // output 1,2,3,4,5
invierte.reverse();
console.log(invierte); // output 5,4,3,2,1

// El método sort() 👉 ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. 
// La ordenación no es necesariamente estable
let color = ['amarillo', 'rojo', 'verde', 'naranja'];
color.sort();
document.write("<div class=scanner> sort( )</br>" + color +"</div>");

let cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
document.write(cosas);

let puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
console.log(puntos);
const order = (a, b) => a - b; // [1, 2, 10, 21]
const orderDes = (a, b) => b - a; // [21, 10, 2, 1]
console.log('ordenado: ' , puntos.sort( order ));

const empleados = [
    { nombre: 'juan', edad: 22 },
    { nombre: 'alexis', edad: 28  },
    { nombre: 'maria', edad: 31 },
    { nombre: 'ricardo', edad: 19  },
    { nombre: 'brian', edad: 19  }
];

const ordenar = (a, b) => {
  return (a.nombre < b.nombre) ? -1 : 1;
};


const empleadosOrdenado = empleados.sort(ordenar);
console.log(empleadosOrdenado);
