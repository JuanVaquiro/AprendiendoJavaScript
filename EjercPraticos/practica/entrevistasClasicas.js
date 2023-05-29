function suma() {
  const b = 2
  return suma2()
}

const b = 3
const c = 1

function suma2() {
  const a = 3
  return a + b + c
}

console.log(suma())

/*  
  que es Closure/Clausura 
  una fn puede acceder a todos elementos
  que se declaren dentro de si misma pero tambien
  va a poder haceder a todas aquellas cosas 
  que esten definidas en el mismo lugar 
*/

const bunny = {
  name: 'Guatemalteco',
  tasks: ['Speak', 'Learn', 'Teach'],
  showTasks: function () { // mar de scope
    this.tasks.forEach(function (task) {  // 👈 esa fn no puede acceder al valor 'name' porque esta afura del scope intero en que se declaro
      console.log(this.name + ' wants to: ' + task)
    });
  }
}

const bunny2 = {
  name: 'Guatemalteco',
  tasks: ['Speak', 'Learn', 'Teach'],
  showTasks: function () { // mar de scope
    this.tasks.forEach((task) => {  // 👈 arrow fn no generar un scope interno
      console.log(this.name + ' wants to: ' + task)
    });
  }
}

// bunny.showTasks()
bunny2.showTasks()

// const hace referencias que no se puede cambiar el epacio en memoria

// map vs filter vs reduce 
const reduce = (acumlador, index) => acumlador + index


// programacion fn son declarativas / no generar efectos secundarios / inutabilidad 
