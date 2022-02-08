const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

function contarOvejas(ovejas) { 
     const rojas = ovejas.filter(ovejas => ovejas.color.includes('rojo'))
     const filterName= rojas.filter(rojas => rojas.name.includes('a'))
     const filternName2= filterName.filter( filterName => filterName.name.includes('N'))
     return filternName2
  }

// Mejorar funcion de filtarOvejas
const contarOvejas2 = (ovejas) => {
    const filterOvejas = ovejas.filter((ovejas) => ovejas.color === 'rojo')
    .filter(filterOvejta => `${filterOvejta.name}`.toLowerCase().includes('n'))
    .filter(filterOvejta => `${filterOvejta.name}`.toLowerCase().includes('a'))
    return filterOvejas
};


const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
console.log(contarOvejas2(ovejas));

const sheeps = [

	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
];

function countSheeps(sheeps) {
	return sheeps.filter((sheep) => sheep.color === 'rojo').filter((sheep) => `${sheep.name}`.match(/[na]/gi));
}

const filteredSheeps = countSheeps(sheeps);
console.log(filteredSheeps);
