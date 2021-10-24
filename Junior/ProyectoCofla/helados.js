//ingresar datos
dineroCofla = prompt("cuanto dinero tienes Cofla");
dineroRoberto = prompt("cuanto dinero tienes Roberto");
dineroPedro = prompt("cuanto dinero tienes Pedro");

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