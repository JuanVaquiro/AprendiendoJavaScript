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

// El método sort( ) 👉 ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. 
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

// El método splice( ) 👉 cambia el contenido de un array eliminando elementos existentes
// y/o agregando nuevos elementos.
const arraySplc = ['elemento1','elemento2','elemento3'];
arraySplc.splice(0,1,'replace','item3') // remplazar/eliminar en la posicion idicada(start 0) (deleteCount 1) 
arraySplc.splice(3,0,'juanes','item2')  // insertar en la posicion indicada(start 3)(deleteCount 0)
arraySplc.splice(-1,0,'fin','item4')    // Un entero indicando el número de elementos a eliminar del array antiguo.
document.write("<div class=scanner> splice( )</br>" + arraySplc +"</div>");

// El método join( ) 👉 une todos los elementos de una matriz (o un objeto similar a una matriz) 
// en una cadena y devuelve esta cadena. separador Optional
// Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena 
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


// Comunes en React 
const info = [{ // arrays de objetos
  id:1,
  title: 'mi primer post',
  tags: ['javascript', 'webdevelopment', 'node'],
},{
  id:2,
  title: 'mi experiencia con react',
  tags: ['javascript', 'webdevelopment', 'react'],
},{
  id:3,
  title: 'porque deje angular',
  tags: ['javascript', 'webdevelopment', 'angular', 'node'],
}];

// El método find( ) 👉 devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// buscar un elemento en el array que selecionemos
const buscar = (info) => info.title === 'porque deje angular';

const resultado4 = info.find(buscar);
console.log(resultado4);

const buscar2 = info.find( info => info.title === 'mi experiencia con react');
console.log(buscar2); 

// El método some( ) 👉  comprueba si al menos un elemento del array cumple 
// con la condición implementada por la función proporcionada.
// retorna true ó false dependiendo de si cumple con la condicion.
const buscar3 = info.some((info) => info.id === 4);
console.log(buscar3); // outpud: false

// El método includes( ) 👉 determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
const buscar4 = info.some(info => info.tags.includes('react')); // some(en almenos un elemento) de info.tags se (incluye) 'react'
console.log(buscar4); // outpud: true

// El método every( ) 👉 Determina si todos los elementos en el array satisfacen una condición.
const buscar5 = info.every(info => info.tags.includes('javascript')); // every(en todos los elemento) del array info.tags se (incluye) 'javascript'
console.log(buscar5); // outpud: true

// El método map( ) 👉 crea un nuevo array con los resultados de la llamada a la función indicada
// aplicados a cada uno de sus elementos.
// formar un nuevo array con solo el elemnto title:
const titles = info.map(info => info.title)
console.log(titles);

// El método filter( ) 👉 crea un nuevo array con todos los elementos que cumplan 
// la condición implementada por la función dada.
// const newfnt = ({tags}) => tags.includes('node');
const filtrar = info.filter(info => info.tags.includes('node'))
console.log(filtrar);

// El método reduce( ) 👉 ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const  arrayReduce = info.reduce((allTags, info) => {
  return Array.from(new Set( [...allTags, ...info.tags] ))
}, []);
console.log(arrayReduce);