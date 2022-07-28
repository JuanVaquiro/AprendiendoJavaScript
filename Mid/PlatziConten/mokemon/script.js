const sectionAtackSelect = document.getElementById("atack-select")
const sectionrRestart = document.getElementById("restart-select")
const btnPlayer = document.getElementById("btn-animalSelect")
const btnRestart = document.getElementById("btn-restart")

const sectionMonsterkSelect = document.getElementById("monster-select");
const playerSpan = document.getElementById("monster-player");
const enemySpan = document.getElementById("monster-enemy");

const spanLifePlayer = document.getElementById("life-player");
const spanLifeEnemy = document.getElementById("life-enemy");
const spanDraw = document.getElementById("draw");

const sectionMessage = document.getElementById("result");
const msmPlayerAtack = document.getElementById("msm-player-atack");
const msmEnemyAtack = document.getElementById("msm-enemy-atack")
const containerCardMonster = document.getElementById("conter-card-id")

const containerBtnAtacks = document.getElementById("container-btn-atacks")

let playerAtack = []
let enemyAtack = []
let grupAtackMonster
let monsterAtacks
// let playerLifes = 3
// let enemylifes = 3
let resultCombat
let monstermons = []
let opcionMonstermon 
let inpuntDrangpo 
let inputArdispo 
let inpuntCocodripo
let playerMonster
let btnFire 
let btnWater 
let btnLand 
let bottons = []
let getAtackPlayer 
let getAtackEnemy 
let winsPlayer = 0
let winsEnemy = 0
let conDraw = 0

class Monstermon{
  constructor(nombre, img, vida, tipo) {
    this.nombre = nombre
    this.img = img
    this.vida = vida
    this.tipo = tipo
    this.ataques = []
  }
}

let dragonpo = new Monstermon(
  'Dragonpo', 
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png', 
  5 , 
  'fire'
)
let cocodripo = new Monstermon(
  'Cocodripo', 
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png', 
  5 , 
  'water'
)
let ardispo = new Monstermon(
  'Ardispo', 
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png', 
  5 , 
  'land'
)

//objeto litetario
dragonpo.ataques.push(
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Agua 💧', id:'btn-water'},
  { nombre:'Tierra 🌱', id:'btn-land'}
)

cocodripo.ataques.push(
  { nombre:'Agua 💧', id:'btn-water'},
  { nombre:'Agua 💧', id:'btn-water'},
  { nombre:'Agua 💧', id:'btn-water'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Tierra 🌱', id:'btn-land'}
)

ardispo.ataques.push(
  { nombre:'Tierra 🌱', id:'btn-land'},
  { nombre:'Tierra 🌱', id:'btn-land'},
  { nombre:'Tierra 🌱', id:'btn-land'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Agua 💧', id:'btn-water'},
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
  btnRestart.addEventListener("click", gameRestart);
}

function selectMonsterPlayer() {
  sectionMonsterkSelect.style.display = "none";
  sectionAtackSelect.style.display = "flex";

  if (inpuntDrangpo.checked) {
    playerSpan.innerHTML = inpuntDrangpo.id;
    playerMonster = inpuntDrangpo.id
  } else if (inpuntCocodripo.checked) {
    playerSpan.innerHTML = inpuntCocodripo.id;
    playerMonster = inpuntCocodripo.id
  } else if (inputArdispo.checked) {
    playerSpan.innerHTML = inputArdispo.id;
    playerMonster = inputArdispo.id
  } else {
    alert("Oops!! algo salio Mal \n Porfavor selecciona un Monstermon");
    sectionAtackSelect.style.display = "none";
    sectionMonsterkSelect.style.display = "flex";
  }
  extractAtacks(playerMonster);
  selectMonsterEnemy();
}

function selectMonsterEnemy() {
  let randomMonster = random(0, monstermons.length - 1);

  enemySpan.innerHTML = monstermons[randomMonster].nombre
  grupAtackMonster = monstermons[randomMonster].ataques
  console.log(grupAtackMonster)
  secuenciaAtack()
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function extractAtacks(playerMonster) {
  let atacks
  for (let i = 0; i < monstermons.length; i++) {
    if (playerMonster === monstermons[i].nombre) {
      atacks = monstermons[i].ataques
    }
  }
  btnsAtacks(atacks)
}

function btnsAtacks(atacks) {
  atacks.forEach((atack) => {
    monsterAtacks = `<button id=${atack.id} class="btn-atack" >${atack.nombre}</button>`;
    containerBtnAtacks.innerHTML += monsterAtacks;
  });
  btnFire = document.getElementById("btn-fire");
  btnWater = document.getElementById("btn-water");
  btnLand = document.getElementById("btn-land");
  bottons = document.querySelectorAll(".btn-atack")
}

function secuenciaAtack() {
  bottons.forEach((botton) => {
    botton.addEventListener('click', (e) => {
      if (e.target.textContent === 'Fuego 🔥') { 
        playerAtack.push('Fuego 🔥')
        botton.style.opacity = '0.5' 
      } else if(e.target.textContent === 'Agua 💧') {
        playerAtack.push('Agua 💧')
        botton.style.opacity = '0.5' 
      } else {
        playerAtack.push('Tierra 🌱')
        botton.style.opacity = '0.5' 
      }
      console.log('PLAYER',playerAtack)
      enemyRandomAtack()
    })
  })
}

function enemyRandomAtack() {
  let randomAtack = random(0, grupAtackMonster.length -1 );
  // console.log('random', randomAtack)
  // if (randomAtack == 0 || randomAtack == 1) {
  //   enemyAtack.push("Fuego 🔥")
  // } else if (randomAtack == 3  || randomAtack == 4) {
  //   enemyAtack.push("Agua 💧") 
  // } else {
  //   enemyAtack.push("Tierra 🌱");
  // }
  enemyAtack.push(grupAtackMonster[randomAtack].nombre)
  grupAtackMonster.splice(randomAtack, 1)
  console.log('ENMY',enemyAtack)
  console.log(grupAtackMonster)
  startFaight()
}

function startFaight() {
  if (playerAtack.length === 5) {
    combat()
  }
}

function getAtackTwoPlayer(player, enemy) {
  getAtackPlayer = playerAtack[player]
  getAtackEnemy = enemyAtack[enemy]
}


function combat() {
  for (let index = 0; index < playerAtack.length; index++) {
    // console.log(playerAtack[index])
    if (playerAtack[index] === enemyAtack[index]) {
      getAtackTwoPlayer(index, index)
      resultCombat = "EMPATE";
      conDraw ++
      spanDraw.innerHTML = conDraw
    } else if(playerAtack[index] === "Fuego 🔥" && enemyAtack[index] === "Tierra 🌱") {
      getAtackTwoPlayer(index, index)
      resultCombat = "GANASTE";
      winsPlayer ++
      spanLifePlayer.innerHTML = winsPlayer
    } else if(playerAtack[index] === "Agua 💧" && enemyAtack[index] === "Fuego 🔥"){
      getAtackTwoPlayer(index, index)
      resultCombat = "GANASTE";
      winsPlayer ++
      spanLifePlayer.innerHTML = winsPlayer
    } else if(playerAtack[index] === "Tierra 🌱" && enemyAtack[index] === "Agua 💧"){
      getAtackTwoPlayer(index, index)
      resultCombat = "GANASTE";
      winsPlayer ++
      spanLifePlayer.innerHTML = winsPlayer
    } else {
      getAtackTwoPlayer(index, index)
      resultCombat = "PIERDES";
      winsEnemy ++
      spanLifeEnemy.innerHTML = winsEnemy
    } 
    createMessage();
  }
}

function playerWin() {
  if (winsPlayer  === winsEnemy) {
    sectionrRestart.style.display = "block";
    createMessageGameOver("Oohh, es un EMPATE")
    disableButton();
  } else if (winsPlayer  > winsEnemy) {
    sectionrRestart.style.display = "block";
    createMessageGameOver("Huurra!! 😎 haz ganado la partida 😎 FIN JUEGO")
    disableButton();
  } else {
    sectionrRestart.style.display = "block";
    createMessageGameOver("Opps!! 😢 haz perdido la partida 😢 FIN JUEGO")
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

  sectionMessage.innerHTML = resultCombat
  paragraphPlayer.innerHTML = getAtackPlayer
  paragraphEnemy.innerHTML = getAtackEnemy

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
