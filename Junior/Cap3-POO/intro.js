class animal{
    constructor( especie, edad, color ){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = 
        `
        info: ${this.especie}, 
        edad: ${this.edad},
        color: ${this.color}
        `;
    };

    verIndormacion() {
        document.write(this.info + '<br>')    
    };
    
};

//HERENCIA
class perro extends animal {
    constructor( especie, edad, color, raza ){
        super(especie, edad, color)
        this.raza = "";
    };
    static ladra(){
        alert('!waw');
    };

    set setModficarRaza(newName){
        this.raza = newName;
    };

    get getRaza(){
        return this.raza
    };
};


const bigud2 = new perro( 'perro', 5, 'blanco', 'bigoul' );

bigud2.setModficarRaza = 'juan';

bigud2.verIndormacion();
document.write(bigud2.raza +'<br>');
document.write('obtener raza get: ' + bigud2.getRaza +'<br>')