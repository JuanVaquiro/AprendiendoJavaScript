/*  aprobar maetrias: requisitos 
- 90% de asistecuas
- promedio por maetrias debe ser al menos 7/ 10
- debe tenr al menos del 75% de trabajos practios 

    soliciar los datos y decirle si aprueba o no.
    mostra todo con colores en cosola
    estrutuado como tabla
*/

const materias ={
    fisica: [90,7,3, 'fisica',],
    logica: [90,7,3, 'logica',],
    bsd: [100,9,, 'bsd',],
    algebra: [90,5,1, 'algebra',],
    quimica: [30,3,1, 'quimica',],
    humanidades: [100,10,2, 'humanidades',], 
};

const aprobar = () => {
   for (const materia in materias) {
    let asistencias = materias[materia][0]   
    let promedio = materias[materia][1]
    let trabajos = materias[materia][2]
    // console.log(materias[materia][3]);

    if (asistencias >= 90){
        console.log('%cCumple Asistencias:', 'color:LawnGreen',
        materias[materia][3],);
       } else{
        console.log('%cDesaporbado por Inasistencias:', 'color:red', 
        materias[materia][3]);
       }
    if (promedio >= 7) {
        console.log('%cPromedio bien','color:LawnGreen');
    } else{
        console.log('%cPromedio mal','color:red');
    }
    if (trabajos >= 3) {
        console.log('%cTrabajos completos','color:LawnGreen');
    } else{
        console.log('%cTrabajos incompletos','color:red');
    }
   }
};

aprobar();