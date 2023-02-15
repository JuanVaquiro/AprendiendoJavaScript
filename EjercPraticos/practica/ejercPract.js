// calcular el facto de 1-10 numeros (ciclos for anidado)
document.write('<div class=scanner>calcular el facto de 1-10 numeros (ciclos for anidado)</div>');
for (let index = 1; index <= 10; index++){
    let facto= 1;
    for (let i = 2;  i <= index; i++) {
        facto *= i;
    };
    document.write(`${index}! = ${facto}<br>`)
};


document.write('<div class=scanner>una clase para hallar cuales el num mayor de 3num</div>');
// una clase para hallar cuales el num mayor de 3num
class Calculo {
    constructor(n1, n2, n3) {
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
    };

    calculoMayor() {
        if (this.n1 > this.n2 && this.n1 > this.n3) {
            document.write(`el mayor es el primer num1 ${this.n1} `)
        } else if (this.n2 > this.n1 && this.n2 > this.n3) {
            document.write(`el mayor es el segundo num2 ${this.n2} `)
        } else if (this.n3 > this.n1 && this.n3 > this.n2) {
            document.write(`el mayor es el tercer num3 ${this.n3} `)
        }
    };
};  

// const num1 = prompt("ingrese Num1");
// const num2 = prompt("ingrese Num2");
// const num3 = prompt("ingrese Num3");
const calcularNum = new Calculo(12,101,2);
calcularNum.calculoMayor();