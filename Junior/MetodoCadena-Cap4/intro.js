// metodo concat() 👉 junta dos ó mas cadenas y retorna una nueva.
let cadena = 'cadena de prueba';
let cadena2 = ' - cadena dos';

resultado = cadena.concat( cadena2 ) // "concat() concatena cadenas"
document.write( "concat()</br>" + resultado );


// metodo starsWith() 👉 si una cadena comienza con los caracteres de otra cadena
// devulve true, sino devuelve false. ( endsWithc() termina igual true )
let start = 'comienzo cadena';
let start2 = 'comienzo';

resultado2 = start.startsWith(start2); // verificar que la cadena start2 comieza como la cadena start
document.write("<div class=scanner> starsWith()</br>" + resultado2 +"</div>");


// metodo includes() 👉 si una cadena puede encontrarse dentro de otra cadnea
// devuelve ture, sio devuelve false.
let include = 'buscar palabra clave';
let include2 = 'palabra';

resultado3 = include.includes(include2); // busca en cualquiera parte de la cadena include la 'palabra'
document.write("<div class=scanner> includes()</br>" + resultado3 +"</div>");


// metodo indexOf() 👉 devuelve el indice del primer caracter de la cadena,
// si no existe, devuelve -1. caso contrario el ultimo indice( lastIndexOf() )
let index = 'inicio de una cadena de texto';
let index2 = 'cadena';

resultado4 = index.indexOf(index2); // devuelve la posicion donde inicia la cadena 
document.write("<div class=scanner> indexOf()</br>" + resultado4 +"</div>");


// metodo padStart() 👉 Rellenar cadena al principio con caracter deseado
let padStart = 'llenar';
let padStart2 = 'juan';

resultado5 = padStart.padStart(14, padStart2); // rellenar al inicio de una cadena
document.write("<div class=scanner> padStart()</br>" + resultado5 +"</div>");


//metodo repeat() 👉 devuelve la misma cadena pero repetida la cantidad deseada
let repeat = '123 ';

resultado6 = repeat.repeat(3);
document.write("<div class=scanner> repeat()</br>" + resultado6 +"</div>");
 