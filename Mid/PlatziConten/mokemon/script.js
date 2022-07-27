const sectionAtackSelect = document.getElementById("atack-select")
const sectionrRestart = document.getElementById("restart-select")
const btnPlayer = document.getElementById("btn-animalSelect")
const btnFire = document.getElementById("btn-fire")
const btnWater = document.getElementById("btn-water")
const btnLand = document.getElementById("btn-land")
const btnRestart = document.getElementById("btn-restart")

const sectionMonsterkSelect = document.getElementById("monster-select");
const playerSpan = document.getElementById("monster-player");
const enemySpan = document.getElementById("monster-enemy");

const spanLifePlayer = document.getElementById("life-player");
const spanLifeEnemy = document.getElementById("life-enemy");

const sectionMessage = document.getElementById("result")
const msmPlayerAtack = document.getElementById("msm-player-atack");
const msmEnemyAtack = document.getElementById("msm-enemy-atack")
const containerCardMonster = document.getElementById("conter-card-id")

let playerAtack
let enemyAtack
let playerLifes = 3
let enemylifes = 3
let resultCombat
let monstermons = []
let opcionMonstermon 
let inpuntDrangpo 
let inputArdispo 
let inpuntCocodripo 

class Monstermon{
  constructor(nombre, img, vida, tipo) {
    this.nombre = nombre
    this.img = img
    this.vida = vida
    this.tipo = tipo
    this.ataques = []
  }
}

let dragonpo = new Monstermon('Dragonpo', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png', 5 , 'fire')

let cocodripo = new Monstermon('Cocodripo', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png', 5 , 'water')

let ardispo = new Monstermon('Ardispo', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png', 5 , 'land')

//objeto litetario
dragonpo.ataques.push(
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Fuego 💧', id:'btn-water'},
  { nombre:'Fuego 🌱', id:'btn-land'}
)

cocodripo.ataques.push(
  { nombre:'Fuego 💧', id:'btn-water'},
  { nombre:'Fuego 💧', id:'btn-water'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Fuego 🌱', id:'btn-land'}
)

ardispo.ataques.push(
  { nombre:'Fuego 🌱', id:'btn-land'},
  { nombre:'Fuego 🌱', id:'btn-land'},
  { nombre:'Fuego 🌱', id:'btn-land'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Fuego 💧', id:'btn-water'},
)

monstermons.push(dragonpo, cocodripo, ardispo )

function startGame() {
  sectionAtackSelect.style.display = "none";
  sectionrRestart.style.display = "none";

  // por cada uno de los elementos de(monstermons) haz algo
  // por cada monstermon que existe dentro el array[monstermons] haz algod
  monstermons.forEach(( monstermon ) => {
    
    opcionMonstermon = `
    <input type="radio" name="monstermon" id=${monstermon.nombre}>
    <label class="monster-card-${monstermon.tipo}" for=${monstermon.nombre}>
        <p>${monstermon.nombre}</p>
        <img src=${monstermon.img} 
        alt=${monstermon.nombre}>
    </label>
    `
    containerCardMonster.innerHTML += opcionMonstermon 

    inpuntDrangpo = document.getElementById("Dragonpo");
    inpuntCocodripo = document.getElementById("Cocodripo");
    inputArdispo = document.getElementById("Ardispo");
    
  })

  btnPlayer.addEventListener("click", selectMonsterPlayer);
  btnFire.addEventListener("click", fireAtack);
  btnWater.addEventListener("click", waterAtack);
  btnLand.addEventListener("click", landAtack);
  btnRestart.addEventListener("click", gameRestart);
}

function selectMonsterPlayer() {
  sectionMonsterkSelect.style.display = "none";
  sectionAtackSelect.style.display = "flex";

  if (inpuntDrangpo.checked) {
    playerSpan.innerHTML = "Dragonpo";
  } else if (inpuntCocodripo.checked) {
    playerSpan.innerHTML = "Cocodripo";
  } else if (inputArdispo.checked) {
    playerSpan.innerHTML = "Ardispo";
  } else {
    alert("Oops!! algo salio Mal \n Porfavor selecciona un Monstermon");
    sectionAtackSelect.style.display = "none";
    sectionMonsterkSelect.style.display = "flex";
  }
  selectMonsterEnemy();
}

function selectMonsterEnemy() {
  let randomMonster = random(0, monstermons.length - 1);

  enemySpan.innerHTML = monstermons[randomMonster].nombre
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function fireAtack() {
  playerAtack = "FUEGO 🔥";
  enemyRandomAtack();
}
function waterAtack() {
  playerAtack = "AGUA 💧";
  enemyRandomAtack();
}
function landAtack() {
  playerAtack = "TIERRA 🌱";
  enemyRandomAtack();
}

function enemyRandomAtack() {
  let randomAtack = random(1, 3);
  if (randomAtack == 1) {
    enemyAtack = "FUEGO 🔥";
  } else if (randomAtack == 2) {
    enemyAtack = "AGUA 💧"; 
  } else {
    enemyAtack = "TIERRA 🌱";
  }
  combat();
  createMessage();
}

function combat() {
  
  if (playerAtack == enemyAtack) {
    resultCombat = "EMPATE";
  } else if (playerAtack == "FUEGO 🔥" && enemyAtack == "TIERRA 🌱") {
    resultCombat = "GANASTE";
    enemylifes--;
    spanLifeEnemy.innerHTML = enemylifes;
  } else if (playerAtack == "AGUA 💧" && enemyAtack == "FUEGO 🔥") {
    resultCombat = "GANASTE";
    enemylifes--;
    spanLifeEnemy.innerHTML = enemylifes;
  } else if (playerAtack == "TIERRA 🌱" && enemyAtack == "AGUA 💧") {
    resultCombat = "GANASTE";
    enemylifes--;
    spanLifeEnemy.innerHTML = enemylifes;
  } else {
    resultCombat = "PIERDES";
    playerLifes--;
    spanLifePlayer.innerHTML = playerLifes;
  }

}

function playerWin() {
  if (playerLifes == 0) {
    sectionrRestart.style.display = "block";
    createMessageGameOver("Opps!! 😢 haz perdido la partida 😢 FIN JUEGO")
    disableButton();
  } else if (enemylifes == 0) {
    sectionrRestart.style.display = "block";
    createMessageGameOver("Huurra!! 🏆 haz ganado la partida 🏆 FIN JUEGO")
    disableButton();
  }
}

function disableButton() {
  btnFire.disabled = true;
  btnWater.disabled = true;
  btnLand.disabled = true;
}

function createMessage() { 
  let paragraphPlayer = document.createElement('p')
  let paragraphEnemy = document.createElement('p')

  sectionMessage.innerHTML = `${resultCombat}`
  paragraphPlayer.innerHTML = `${playerAtack}`
  paragraphEnemy.innerHTML = `${enemyAtack}`

  msmPlayerAtack.appendChild(paragraphPlayer);
  msmEnemyAtack.appendChild(paragraphEnemy);
  playerWin();
}

function createMessageGameOver(finalResult) {
  sectionMessage.innerHTML = finalResult
}

function gameRestart() {
  location.reload();
}

// el objeto global windows ecucha 'load'
// indicaldo de que todo el contenido HTML ya CARGO
window.addEventListener("load", startGame);
