// let frutas = ["uva", "manzana", "banana"];

// document.write(frutas[1]);

//arrays asociativos 
let pc1 = {
    nombre: "JuanPc",
    procesador: "intel Core I5",
    ram: "6GB",
    espacio: "1TB"
};

// let pc2 = ["JuanPc", "intel-Core-I5",  "6-GB", "1-TB"];
let nombre = pc1["nombre"]; 
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: <b>${nombre}</b><br>    
        el procesador es: <b>${procesador}</b><br>
        la memorias es: <b>${ram}</b><br>
        el espacio en disco es: <b>${espacio}</b><br>`; 

document.write(frase);