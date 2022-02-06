document.write(
  '<br><br><b style="color:yellow">Metodos de selección de elementos</b></br><br>'
);

document.write(
  '<b style="color:DarkCyan">getElementById( ) - Selecciona un elemento por ID</b><br>'
);
const parte = document.getElementById("parte");
document.write(`ElmentbyID( ): ${parte}<br><br>`);

document.write(
  '<b style="color:DarkCyan">getElementsByTagName( ) - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especifica</b><br>'
);
const parte2 = document.getElementsByTagName("div");
document.write(`ElementsByTagName( ): ${parte2}<br><br>`);

document.write(
  '<b style="color:DarkCyan">querySelector( ) - Devuelve el primer elementos que coincida con el grupo especificado de selectores</b><br>'
);
const parte3 = document.querySelector(".parte3");
document.write(`querySelector( ): ${parte3}<br><br>`);

document.write(
  '<b style="color:DarkCyan">querySelectorAll( ) - Devuelve todos los elementos que coincida con el grupo especificado de selectores</b><br>'
);
const parte4 = document.querySelectorAll(".parte3");
document.write(`querySelectorAll( ): ${parte4}<br><br>`);



// Metodos para Definir, obtener y eliminar atributos
document.write(
  '<br><b style="color:yellow"> Metodos para Definir, obtener y eliminar atributos</b></br><br>'
);

document.write(
  '<b style="color:DodgerBlue">setAttribute( ) - Modifica el valor de un atributo. -Establece el valor de un atributo en el elemento indicado.' +
    "Si el atributo ya existe el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado</b><br>"
);
// Element.setAttribute(name, value);
let b1 = document.querySelector(".btn1");
b1.setAttribute("name", "miBotton");
b1.setAttribute("disabled", "");
document.write(`setAttribute( ): ${b1}<br><br>`);

document.write(
  '<b style="color:DodgerBlue">getAttribute( ) - Obtiene el valor de un atributo. -Devuelve el valor del atributo especificado en el elemento.' +
    'Si el atributo especificado no existe,el valor retornado puede ser tanto null como "" (una cadena vacía);</b><br>'
);
// let atributo = element.getAttribute(nombreAtributo);
let b2 = document.querySelector(".btn2");
document.write(b2.getAttribute("type"), "<br></br>");

document.write(
  '<b style="color:DodgerBlue">removeAtribute( ) - Elimina un atributo del elemento especificado</b><br>'
);
// element.removeAttribute(attrName);
let b3 = document.querySelector(".btn1");
b3.removeAttribute("disabled");
document.write(`removeAttribute( ): ${b3}<br><br>`);


// Atributos Globales
// Los atributos globales son atributos comunes a todos los elementos HTML; se pueden usar en todos los elementos, 
// aunque es posible que no tengan ningún efecto en algunos elementos.

// contentEditable -Un atributo enumerado que indica si el usuario debe poder editar el elemento. Si es así, el navegador modifica su «widget»
// true o la cadena vacía, la cual indica que el elemento debe ser editable;
// false, el cual indica que el elemento no debe ser editable.

const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true");

// tabindex -Un atributo entero que indica si el elemento puede tomar el foco de entrada (es enfocable), si debe participar en la navegación secuencial del teclado.

// Element.classList La propiedad de sólo lectura Element
// classList devuelve una colección activa de DOMTokenList de los atributos de clase del elemento.
// metodos classList https://developer.mozilla.org/es/docs/Web/API/Element/classList


// Creacion de elementos
const contener = document.querySelector(".contener");
const item = document.createElement('LI');
const textDeItem = document.createTextNode("item lista");
item.appendChild(textDeItem);
contener.appendChild(item);
console.log(item);


// Obtencion y modficacion de childs
/* 
  firstChild
  lastChild
  firstElementChild
  lastElementChiild
  childNodes
  *children*
*/ 
