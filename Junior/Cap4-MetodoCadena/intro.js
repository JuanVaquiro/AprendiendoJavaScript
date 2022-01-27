// metodo concat( ) 👉 junta dos ó mas cadenas y retorna una nueva.
let cadena = 'cadena de prueba';
let cadena2 = ' - cadena dos';

resultado = cadena.concat( cadena2 ) // "concat( ) concatena cadenas"
document.write( "concat( )</br>" + resultado );


// metodo starsWith( ) 👉 si una cadena comienza con los caracteres de otra cadena
// devulve true, sino devuelve false. ( endsWithc( ) termina igual true )
let start = 'comienzo cadena';
let start2 = 'comienzo';

resultado2 = start.startsWith(start2); // verificar que la cadena start2 comieza como la cadena start
document.write("<div class=scanner> starsWith( )</br>" + resultado2 +"</div>");


// metodo includes( ) 👉 si una cadena puede encontrarse dentro de otra cadnea
// devuelve ture, sio devuelve false.
let include = 'buscar palabra clave';
let include2 = 'palabra';

resultado3 = include.includes(include2); // busca en cualquiera parte de la cadena include la 'palabra'
document.write("<div class=scanner> includes( )</br>" + resultado3 +"</div>");


// metodo indexOf( ) 👉 devuelve el indice del primer caracter de la cadena,
// si no existe, devuelve -1. caso contrario el ultimo indice( lastIndexOf( ) )
let index = 'inicio de una cadena de texto';
let index2 = 'cadena';

resultado4 = index.indexOf(index2); // devuelve la posicion donde inicia la cadena 
document.write("<div class=scanner> indexOf( )</br>" + resultado4 +"</div>");


// metodo padStart( ) 👉 Rellenar cadena al principio con caracter deseado
let padStart = 'llenar';
let padStart2 = 'juan';

resultado5 = padStart.padStart(14, padStart2); // rellenar al inicio de una cadena
document.write("<div class=scanner> padStart( )</br>" + resultado5 +"</div>");


//metodo repeat( ) 👉 devuelve la misma cadena pero repetida la cantidad deseada
let repeat = '123 ';

resultado6 = repeat.repeat(3);
document.write("<div class=scanner> repeat( )</br>" + resultado6 +"</div>");
 


// parte2️⃣  metodos traforma cadena

// metodo split( ) 👉 El método split( ) divide un objeto de tipo String en un array (vector) 
// de cadenas mediante la separación de la cadena en subcadenas.
let cadenas = 'hola,como,estas';

resultado7 = cadenas.split(" "); // trasfoma la cadena en un array para seperar el elemento
console.log(resultado7);
document.write("<div class=scanner> split( )</br>" + resultado7 +"</div>");


// metodo subString( ) devuelve(retorna) un subconjunto de un objeto String que selecionamos.
let subconjunto = 'abcdefgh';

resultado8 = subconjunto.substring(2,6); // star , end
document.write("<div class=scanner> substring( )</br>" + resultado8 +"</div>");

// metodo toLowerCase( ) 👉 evuelve el valor en minúsculas de la cadena que realiza la llamada.
let textoMaysc = 'JUAN DAVID';

resultado9 = textoMaysc.toLowerCase( );
document.write("<div class=scanner> toLowerCase( )</br>" + resultado9 +"</div>");


// metodo toUpperCase( ) 👉 evuelve el valor en MAYUSCULAS de la cadena que realiza la llamada.

// motodo toString( ) 👉 Devuelve una cadena que representa al objeto.
let objeto = new Object( );
objeto.toString( ); // Devuelve [object Object]

let array = ["pedro", "juan"];
let resultado10 = array.toString( );


document.write("<div class=scanner> toString( )</br>" + resultado10[0] +"</div>");


// método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido
// método trimStar( ) método trimEnd( ) 
let espacios = ' juan  ';
let resultado11 = espacios.trim();
document.write("<div class=scanner> trim( )</br>" + resultado11 +"</div>");
document.write(resultado11.length)

