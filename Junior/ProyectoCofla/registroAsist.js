let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [] ;

for (let i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)), 0];
}   

const tomarAsistencias = (nombre, p) => {
       let presencia = prompt(nombre);
       if(presencia == "p" ){
           alumnosTotales[i][1] ++ ;
       } 
}  

for (i = 0; i < 30; i++) {
    for (let alumno in alumnosTotales){
        tomarAsistencias(alumnosTotales[alumno][0], alumno);    
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[almuno][0]} : <br>
    _______ Presentes: ${alumnosTotales[alumno][1]} <br>
    _______ Ausencias: `
}