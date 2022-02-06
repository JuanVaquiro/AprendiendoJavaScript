document.write('<br><b style="color:yellow">Metodos de selección de elementos</b></br><br>');

document.write('<b style="color:DarkCyan">getElementById( ) - Selecciona un elemento por ID</b><br>');
parte = document.getElementById('parte');
document.write(`ElmentbyID( ): ${parte}<br><br>`);


document.write('<b style="color:DarkCyan">getElementsByTagName( ) - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especifica</b><br>');
parte2 = document.getElementsByTagName('div');
document.write(`ElementsByTagName( ): ${parte2}<br><br>`);


document.write('<b style="color:DarkCyan">querySelector( ) - Devuelve el primer elementos que coincida con el grupo especificado de selectores</b><br>');
parte3 = document.querySelector('.parte3');
document.write(`querySelector( ): ${parte3}<br><br>`);


document.write('<b style="color:DarkCyan">querySelectorAll( ) - Devuelve todos los elementos que coincida con el grupo especificado de selectores</b><br>');
parte4 = document.querySelectorAll('.parte3');
document.write(`querySelectorAll( ): ${parte4}<br><br>`);

 
// Metodos para Definir, obtener y eliminar valores de atributo
document.write('<br><b style="color:yellow"> Metodos para Definir, obtener y eliminar valores de atributo</b></br><br>');

document.write('<b style="color:DodgerBlue">setAttribute( ) - Modifica el valor de un atributo</b><br>');


document.write('<b style="color:DodgerBlue">getAttribute( ) - Obtiene el valor de un atributo</b><br>');


document.write('<b style="color:DodgerBlue">removeAtribute( ) - Remueve el valor de un atributo</b><br>');



const rangoEtario = document.querySelector(".rangoAge");
rangoEtario.setAttribute('type', 'number'); // modificar el atributo

obtenerValor = rangoEtario.getAttribute('range');
document.write(obtenerValor);