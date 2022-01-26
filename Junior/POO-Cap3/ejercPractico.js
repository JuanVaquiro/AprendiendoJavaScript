class Celular{
    constructor( color, peso, resolcPantalla, resolcCamara, ram ){
        this.color = color;
        this.peso = peso;
        this.resolcPantalla = resolcPantalla;
        this.resolcCamara = resolcCamara;
        this.ram = ram;
        this.encendido = false;
    };

    btnPrender(){
        if(this.encendido == false ){
            alert('celular prendido');
            this.encendido = true;
        } else {
            alert('celular apagado');
            this.encendido = false;
        };
    };

    btnReiniciar(){
        if(this.encendido == true){
            alert('reiniciando celular');
        } else {
            alert('el celular estar apagado');
        };
    };

    btnFoto(){
        alert(`foto tomada - resolucion: ${this.resolcCamara}`);
    };

    btnGrabarVideo(){
        alert(`grabando video - resolucion: ${this.resolcCamara}`);
    };

    infoCelular(){
        return`
        color: <b>${this.color} </b></br>
        peso: <b>${this.peso}</b></br>
        tamaño: <b>${this.resolcPantalla}</b></br>
        resolucion video: <b>${this.resolcCamara}</b></br>
        memora ram: <b>${this.ram}</b></br>
        
        `;
    };

};


class CelularAltaGama extends Celular{
    constructor(color,peso,resolcPantalla,resolcCamara,ram, rdce){
        super(color, peso, resolcPantalla, resolcCamara, ram);
        this.resolcCamaraFrontal = rdce;
    };
    
    grabarVideoLento(){
        alert('camara modo lento');
    };

    reconociminetoFacial(){
        alert('reconociendo cara');
    };

    infoAltaGama(){
        return `alta gama <br><div class="caja">` + this.infoCelular() + 
        `resolucion de gama extra: <b>${this.resolcCamaraFrontal}</b></div>`;
    }
};

celular1 = new Celular('azul', "150g", "5","18020x720","8GB");
celular2 = new Celular('negro', "120g", "12","16020x520","6GB");
celular3 = new Celular('rojo', "190g", "8","19020x870","16GB");

// cecular1.btnPrender();
// cecular1.btnFoto();
// cecular1.btnGrabarVideo();
// cecular1.btnReiniciar();
// cecular1.btnPrender();  

celularUno = new CelularAltaGama("negro","140g", "7","1902x920","32GB","full hd");
celularDos = new CelularAltaGama("azul","160g", "17","1902x920","64GB","hd");

document.write(`
    ${celular1.infoCelular()} <br>
    ${celular2.infoCelular()} <br>
    ${celular3.infoCelular()} <br>
    ${celularUno.infoAltaGama()} <br>
    ${celularDos.infoAltaGama()} <br>

`);


//ejeccicio dos
class App {
    constructor(descargas, puntuacion, peso){
        this.descargas =  descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    };

    abrirApp(){
        if (this.iniciada == false) {
            this.iniciada = true;
            alert("app encendida");
        };
    };

    cerrarApp(){
        if (this.iniciada == true) {
            this.iniciada = false;
            alert("app cerrada");
        };
    };

    instalarApp(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada correctamente");
        };
    };

    desistalarApp(){
        if (this.instalada == true) {
            this.instalada = false;
            alert("app desistalado correctamente");
        };
    };

    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }

};

app1 = new App("7000", "3⭐", "8gb");
app2 = new App("1.100.000", "5⭐", "18gb");
console.log(app1);

// app1.instalarApp();
// app1.abrirApp();
// app1.cerrarApp();
// app1.abrirApp();

document.write(`
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
`);