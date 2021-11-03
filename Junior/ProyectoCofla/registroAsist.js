let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [] ;

for (let i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)), 0];
}   

const tomarAsistencias = (nombre, p) => {
       let presencia = prompt(nombre);
       if(presencia == "p" ){
           alumnosTotales[p][1] ++ ;
       } 
}  

for (i = 0; i < 30; i++) {
    for (let alumno in alumnosTotales){
        tomarAsistencias(alumnosTotales[alumno][0], alumno);    
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]} : <br>
    _______ Presentes: <b>${alumnosTotales[alumno][1]} </b><br>
    _______ Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<b style='color:red'> REPORBADO POR INACISTESCIAS </b><br><br>";    
    } else {
        resultado += "<br><br>";
    }
    document.write(resultado);
}