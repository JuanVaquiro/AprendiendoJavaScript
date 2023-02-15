// "#1 Dado un arreglo de objetos que representan productos, 
// escribe una función que devuelva el precio total de todos los productos." 

const products = [
  { name: 'cicla', price: 10000 },
  { name: 'casco', price: 5000 },
  { name: 'jersay', price: 8000 },
  { name: 'guantes', price: 2000 }
]
function getTotalPrice(products) {
  let total = 0
  products.forEach((item) => {
    total += item.price
  })
  return console.log(`el total de los productos son: $${total}`)
}

function getTotalPrice(products) {
  products.forEach((item, index) => {
    console.log(`${index} - ${item.price}`)
  })
}

const allPrice = products.map((products, index) =>
  `${index} - ${products.price}`
)


// "#2 Escribe una función que tome un objeto 
// y devuelva un arreglo de todas sus propiedades."

const object = {
  id: 2,
  name: 'juan',
  tel: 302123,
  site: 'santa marta'
}

function getObject(object) {
  let array
  array = Object.entries(object)
  return array
}

// "#3 Dado un arreglo de números, escribe una 
// función que devuelva el número más grande."

const num = [5, 44, 2, 12, 3, 6]
let par = num.filter(item => item % 2 === 0)

function ValueNum(arr) {
  let maxElement = arr[0]
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > maxElement) {
      console.log(maxElement = arr[index])
      maxElement = arr[index]
    }
  }
  return maxElement
}
// devuvle el numero mas grande de un array con metodo Math
const numbers = [1, 4, 2, 18, 5, 9, 3];

function getMaxNumber(numbers) {
  return Math.max(...numbers)
}
const maxNumber = getMaxNumber(numbers)
console.log(maxNumber)

// "#4 Escribe una función que tome dos objetos y devuelva 
// un objeto que sea la combinación de ambos."

const objOne = {
  name: 'juan',
  age: 23,
  tel: 300232,
  adrres: 'barlovento'
}

const objTwo = {
  pro: 'developer',
  lenjunge: 'javaScript',
  tec: 'react'
}

function unirObjeto(object1, object2) {
  
}