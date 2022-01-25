//ingresar datos
let dineroCofla = prompt("cuanto dinero tienes Cofla");
let dineroRoberto = prompt("cuanto dinero tienes Roberto");
let dineroPedro = prompt("cuanto dinero tienes Pedro");

//convertir el dato String en un dato Entero (Funcion)
dineroCofla = parseInt(dineroCofla);


//rangos de halados
if ( dineroCofla >= 0.6 && dineroCofla < 1 ) {
    alert( "Puedes comprar el helado de agua" );
    alert( "y te sobran" + (dineroCofla - 0.6) );
}      
else if ( dineroCofla >= 1 && dineroCofla < 1.6 ){
    alert( "Puedes comprar el helado de crema" );
    alert( "y te sobran: " + (dineroCofla - 1.6) );

}   
else if ( dineroCofla >= 1.6 && dineroCofla < 1.7    ){
    alert( "Puedes comprar el helado de heladovich" );
    alert( "y te sobran" + (dineroCofla - 1.7) );

}   
else if ( dineroCofla >= 1.7 && dineroCofla < 1.8 ){
    alert("Puedes comprar el helado de helardo ");
    alert( "y te sobran" + (dineroCofla - 1.8) );

}   
else if ( dineroCofla >= 1.8 && dineroCofla < 2.9 ){
    alert( "Puedes comprar el helado de confites Ó el pote de 1/4kg ");
    alert( "y te sobran" + (dineroCofla - 2.9) );

}    
else {
    alert( "Lo sentimos No tienes saldo Suficiente" );
}


//version mejorada  de codigo 

// const definirCompra = (n) => {
//     let dinero = prompt (`Dinero de ${n}`);
//     if ( dinero >= 0.6 && dinero < 1 && dinero -  0.6 ) return ( `${n}: helado de agua y te sobran ${dinero}` );
//     if ( dinero >= 1   && dinero < 1.6 && dinero -  1.6 ) return ( `${n}: helado de crema` );
//     if ( dinero >= 1.6 && dinero < 1.7 && dinero -  1.7 ) return ( `${n}: helado de heladix` );
//     if ( dinero >= 1.7 && dinero < 1.8 && dinero -  1.8 ) return ( `${n}: helado de heladovich` );
//     if ( dinero >= 1.8 && dinero < 2.9 && dinero -  2.9 ) return ( `${n}: helado de helardo` );
//     if ( dinero >= 2.9 && dinero < 1 && dinero -  0.6 ) return ( `${n}: helado de confites o pote` );
//     else return 
//     ( `${n}: Dinero insuficiente` );
// }

// console.log(definirCompra("Cofla"));
// console.log(definirCompra("Pedro"));
// console.log(definirCompra("Roberto"));
