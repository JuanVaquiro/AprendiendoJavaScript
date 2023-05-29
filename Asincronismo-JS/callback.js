function sum(num1, num2) {
  return num1 + num2
}

function calc(num1, num2, callback) {
  return callback(num1, num2)
}

console.log(calc(2, 4, sum))

// es un fn que se pasa como argumento
// a otra fn para ser invocado

setTimeout(() => {
  console.log('hola Callback')
}, 3000)


setTimeout(gretting, 1000, 'juan')


function execCallback(callback) {
  setTimeout(callback, 2000)
}

function gretting() {
  console.log(`Hola`)
}

execCallback(gretting)