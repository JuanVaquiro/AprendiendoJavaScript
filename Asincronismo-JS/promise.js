const primise = new Promise((resolve, reject) => {
  resolve('todo listo!')
})

const cows = 2
const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`)
  } else {
    reject('There is NO cows on the farm')
  }
})

countCows.then((result) => {
  console.log(result)
}).catch((err) => {
  console.error(err)
}).finally(() => console.log('Finally'))


function delay(time, message) {
  return new Promise((resolve) => {
      window.setTimeout(() =>{
       resolve (message)
      }, time)
   })
}