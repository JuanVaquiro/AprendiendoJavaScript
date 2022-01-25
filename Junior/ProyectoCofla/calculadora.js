const sumar = ( num1, num2 ) => parseInt(num1) + parseInt(num2)

const restar = ( num1, num2 ) => parseInt(num1) - parseInt(num2)

const divir = ( num1, num2 ) => parseInt(num1) / parseInt(num2)
 
const mult = ( num1, num2 ) => parseInt(num1) * parseInt(num2)
 
 
 alert("que operacion desea realizar");

 let operacion = prompt
 (
     "1:suma, 2:resta, 3:division, 4:mult"
 );

 if (operacion == 1) {
     let numero1 = prompt("pirmer numero ")
     let numero2 = prompt("segundo numero ")
     resultado = suma(numero1, numero2);
     alert(`el resultado es ${resultado}`);
 }
 else if(operacion == 2){
    let numero1 = prompt("pirmer numero ")
    let numero2 = prompt("segundo numero ")
    resultado = restar(numero1, numero2);
    alert(`el resultado es ${resultado}`);
 }

 else if(operacion == 3){
    let numero1 = prompt("pirmer numero ")
    let numero2 = prompt("segundo numero ")
    resultado = divir(numero1, numero2);
    alert(`el resultado es ${resultado}`);
 }

 else if(operacion == 4){
    let numero1 = prompt("pirmer numero ")
    let numero2 = prompt("segundo numero ")
    resultado = mult(numero1, numero2);
    alert(`el resultado es ${resultado}`);
 } 
 else{
        alert("no se ecunetra el operador")
 }






