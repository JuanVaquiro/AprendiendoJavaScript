const obtnerInfo = (materia) => {
  mate = {
      fisica: ['profe lucas', 'pedro', 'maria', 'cofla'], 
      programacion: ['profe vaqui', 'pedro', 'juan', 'maria', ],
      logica: ['profe angela', 'pedro', 'juan', 'maria', 'cofla'],
      quimica: ['profe daniel', 'pedro', 'juan',  'cofla']
  }
  if (mate[materia] !== undefined) {    
      return [ mate[materia],materia,mate ];
  } else{
      return mate;
  }
};

const mostrarInfo = (materia) => {
    let infos = obtnerInfo(materia);
    if (infos !== false) {
    const profesor = obtnerInfo(materia)[0][0];
    const alumnos = obtnerInfo(materia)[0];
    alumnos.shift();
    document.write(`El profesor de <b>${infos[1]}</b>  
    es: <b style="color:orange"> ${profesor}</b><br>  
    Almunos registrados: <b style="color:Fuchsia">${alumnos}</b><br><br>`);
    };
};

const cantidadClase = (almuno) => {
  let informacion = obtnerInfo();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for ( let info in informacion ) {
    if ( informacion[info].includes(almuno) ) { 
        cantidadTotal ++;
        clasesPresentes.push(" " + info);
    }
  } return `<b style="color:Fuchsia"> ${almuno} 
  </b> esta en ${cantidadTotal} clases<br>
  Esta cursnado las clases <b style='color:LimeGreen'>${clasesPresentes}</b><br><br>`;
};



mostrarInfo('fisica');
mostrarInfo('logica');
document.write(cantidadClase('cofla'))


//objeto array
const materias1 = [{
    fisica: ['profesorjuan', 'pedro', 'maria', 'cofla'], 
    programacion: ['pedro', 'juan', 'maria', ],
    logica: ['pedro', 'juan', 'maria', 'cofla'],
    quimica: ['pedro', 'juan',  'cofla']
}];

document.write('<br>metodos:<br>')
const arrayMap = materias1.map(materias1 => materias1.fisica)
document.write(`alumnos registrados : <b style="color:Fuchsia">${arrayMap}</b>`);
console.log(arrayMap);

const profe = materias1.find(materias1 => materias1.fisica.includes('profesorjuan'));
document.write('<br>profesor: ', profe) 
console.log(profe);

////
const obtnerInfo22 = ( asing ) => {
  mate11 = {
      fisica: ['profe lucas', 'pedro', 'maria', 'cofla'], 
      programacion: ['profe vaqui', 'pedro', 'juan', 'maria', ],
      logica: ['profe angela', 'pedro', 'juan', 'maria', 'cofla'],
      quimica: ['profe daniel', 'pedro', 'juan',  'cofla']
  }
  return console.log(mate11[asing])
};

obtnerInfo22('logica');