// 01-Templete Literals
// antes 
const nombre = 'juan';
const apellido = 'diaz';
console.log(nombre + " <" + apellido);
//backtis
console.log(`${nombre} ${apellido}`);


// 02-shorthand property names
const nombre2 = 'david';
const edad = 22;
const twitter = 'https//twiteer.com/david';
// no es necesario indicar clave, valor
// si el nombre de la variable es el mmismo que la clave sirve(prop)
const persona = {  
    nombre2, 
    edad,
    twitter
};
console.log(persona);

// 03-Destructuring de objetos y arryas
const cuadrado = {
    x: 10,
    y: 8
};

const calcularArea = ({ x , y }) => {
    return x * y;
};

console.log( calcularArea(cuadrado) );

// 04-Default Parameters 
// estable un valor por defecto a los props
const suma = ( a = 0, b = 0 ) => {
  return a + b;
};

console.log(suma(3));


//05-Parameters Rest 
const arrays = [1, 2, 3, 4, 5];
const otroArrays = [6, 7, 8, 9, 10];

const nuevoArray = [...arrays, ...otroArrays];
console.log(nuevoArray);

//objeto
const objeto1 = {
    a: "a",
    b: "b",
    c: "c"
};
const objeto2 = {
    d: "d",
    e: "e"
};

const nuevoObjeto = {...objeto1, ...objeto2};
console.log(nuevoObjeto);


// 06-Operador Ternario 
// renderizar un componente en ua sola linea sentecias if-else
const coche = {
    marca: "tesla",
    model: "AngilaFt"
};

// let modelo;
// if (coche.model) {
//     modelo = coche.model;
// } else {
//     modelo = "X";
// }

let modelo = coche.model ? coche : 'X';

console.log(modelo);    


//ES2020 
const resta = (a1, b1) => {
//   a = a == null ? 0 : a
//   b = b == null ? 0 : b
// ahora
// a es igual a SiNo entonces es = 0
  a1 = a1 ?? 0;
  b1 = b1 ?? 0;
  return a1 - b1;
};
console.log(resta(4));

const user = {
    nombre,
    edad,
    location: {
        f: 123,
        g: 032,
        city: {
            zipcode: "dom",
            distance: "dam"
        }
    }   
}

const dato = user?.location?.city.zipcode; // so existe dentro del objeto
console.log(dato);
