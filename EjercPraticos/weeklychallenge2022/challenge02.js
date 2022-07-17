/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci 
 * empezando en 0. La serie Fibonacci se compone por una sucesión de números en la que el siguiente 
 * siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */


const Fibonacci = (num) => {
    const f = [0, 1]
    for (let i = 2; i <= num; i++) {
        f[i] = f[i - 1]  + f[i - 2]
    }
    return console.log(f[num]) 
}

Fibonacci(3) // -> 2
Fibonacci(8) // -> 21


function Fibonacce01() {
    
    const arr = [1,,,50]
    let n0 = 0
    let n1 = 1
    arr.forEach(element => {
        console.log(n0)
        let fib = n0 + n1
        n0 = n1
        n1 + fib
    });
}


Fibonacce01()