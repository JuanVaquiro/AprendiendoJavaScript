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
const msmAdvantage = document.getElementById("messages");
const divImgPlayer = document.getElementById("img-player");
const divImgEnemy = document.getElementById("img-enemy");

// Canvas
const sectionMapa = document.getElementById("mapa-gamer")
const mapa = document.getElementById("mapa")

let playerAtack = []
let enemyAtack = []
let grupAtackMonster
let extractImgPlayer
let extractImgEnemy
let extractTypeEnemy
let extractTypePlayer
let monsterAtacks
let resultCombat
let monstermons = []
let opcionMonstermon 
let inpuntDrangpo 
let inputArdispo 
let inpuntCocodripo
let inpuntCanipo
let inpuntGhatopo
let inpuntCuervoopo
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
// canvas
let lienzo = mapa.getContext('2d')
let intervalo


class Monstermon{
  constructor(nombre, img, vida, tipo) {
    this.nombre = nombre
    this.img = img
    this.vida = vida
    this.tipo = tipo
    this.ataques = []
    this.x = 20
    this.y = 30
    this.width = 80
    this.height = 80
    this.mapaFoto = new Image()
    this.mapaFoto.src = img
    this.speedX = 0
    this.speedY = 0
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
  'ground'
)
let canipo = new Monstermon(
  'Canipo', 
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png', 
  5 , 
  'fire'
)
let ghatopo = new Monstermon(
  'Ghatopo', 
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png', 
  5 , 
  'water'
)
let cuervoopo = new Monstermon(
  'Cuervoopo', 
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png', 
  5 , 
  'ground'
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
canipo.ataques.push(
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Agua 💧', id:'btn-water'},
  { nombre:'Tierra 🌱', id:'btn-land'}
)
ghatopo.ataques.push(
  { nombre:'Agua 💧', id:'btn-water'},
  { nombre:'Agua 💧', id:'btn-water'},
  { nombre:'Agua 💧', id:'btn-water'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Tierra 🌱', id:'btn-land'}
)
cuervoopo.ataques.push(
  { nombre:'Tierra 🌱', id:'btn-land'},
  { nombre:'Tierra 🌱', id:'btn-land'},
  { nombre:'Tierra 🌱', id:'btn-land'},
  { nombre:'Fuego 🔥', id:'btn-fire'},
  { nombre:'Agua 💧', id:'btn-water'},
)

monstermons.push(dragonpo, cocodripo, ardispo, canipo, ghatopo, cuervoopo )

function startGame() {
  sectionAtackSelect.style.display = "none";
  sectionrRestart.style.display = "none";
  sectionMapa.style.display = "none"

  // por cada uno de los elementos de(monstermons) haz algo
  // por cada monstermon que existe dentro el array[monstermons] haz algod
  monstermons.forEach(( monstermon ) => {
    opcionMonstermon = `
    <input type="radio" name="monstermon" id=${monstermon.nombre}>
    <label class="monster-card-${monstermon.tipo}" for=${monstermon.nombre}>
      <div class="data-monster">
        <p>${monstermon.nombre}</p>
        <p>Tipo-${monstermon.tipo}</p>
      </div>
        <img src=${monstermon.img} 
        alt=${monstermon.nombre}>
    </label>
    `
    containerCardMonster.innerHTML += opcionMonstermon 

    inpuntDrangpo = document.getElementById("Dragonpo");
    inpuntCocodripo = document.getElementById("Cocodripo");
    inputArdispo = document.getElementById("Ardispo");
    inpuntCanipo = document.getElementById("Canipo")
    inpuntGhatopo = document.getElementById("Ghatopo")
    inpuntCuervoopo = document.getElementById("Cuervoopo") 
  })
  btnPlayer.addEventListener("click", selectMonsterPlayer);
  btnRestart.addEventListener("click", gameRestart);
}

function selectMonsterPlayer() {
  sectionMonsterkSelect.style.display = "none";
  // sectionAtackSelect.style.display = "flex";
  // Canvas
  sectionMapa.style.display = "flex"
  intervalo = setInterval(picturImg, 50)
  // Movimiento de teclado

  if (inpuntDrangpo.checked) {
    playerSpan.innerHTML = inpuntDrangpo.id;
    playerMonster = inpuntDrangpo.id
  } else if (inpuntCocodripo.checked) {
    playerSpan.innerHTML = inpuntCocodripo.id;
    playerMonster = inpuntCocodripo.id
  } else if (inputArdispo.checked) {
    playerSpan.innerHTML = inputArdispo.id;
    playerMonster = inputArdispo.id
  } else if (inpuntCanipo.checked) {
      playerSpan.innerHTML = inpuntCanipo.id;
      playerMonster = inpuntCanipo.id
  } else if (inpuntGhatopo.checked) {
      playerSpan.innerHTML = inpuntGhatopo.id;
      playerMonster = inpuntGhatopo.id
  } else if (inpuntCuervoopo.checked) {
    playerSpan.innerHTML = inpuntCuervoopo.id;
    playerMonster = inpuntCuervoopo.id
  } else {
    alert("Oops!! algo salio Mal \n Porfavor selecciona un Monstermon");
    sectionAtackSelect.style.display = "none";
    sectionMonsterkSelect.style.display = "flex";
  }
  extractType(playerMonster); 
  extractImg(playerMonster)
  selectMonsterEnemy();
  extractAtacks(playerMonster);
}

function selectMonsterEnemy() {
  let randomMonster = random(0, monstermons.length - 1);

  enemySpan.innerHTML = monstermons[randomMonster].nombre
  grupAtackMonster = monstermons[randomMonster].ataques
  extractTypeEnemy = monstermons[randomMonster].tipo
  extractImgEnemy = monstermons[randomMonster].img
  // console.log(grupAtackMonster)
  typeAdvantagePlayer(extractTypePlayer, extractTypeEnemy)
  typeAdvantageEnemy(extractTypePlayer, extractTypeEnemy)
  imgPlayers(extractImgPlayer, extractImgEnemy)
  // secuenciaAtack()
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
  secuenciaAtack()
}

function extractType(playerMonster) {
  for (let i = 0; i < monstermons.length; i++) {
    if (playerMonster === monstermons[i].nombre) {
      extractTypePlayer = monstermons[i].tipo
    }
  } 
  return extractTypePlayer
} 

function extractImg(playerMonster) {
  for (let i = 0; i < monstermons.length; i++) {
    if (playerMonster === monstermons[i].nombre) {
      extractImgPlayer = monstermons[i].img
    }
  } 
  return extractImgPlayer
} 

function typeAdvantagePlayer(playerType, enemyType) {
  console.log('TypePlater', playerType, 'TypeEnemy', enemyType)
  for (let i = 0; i < monstermons.length; i++) {
    if (playerMonster === monstermons[i].nombre) {
      if (playerType === enemyType ) {
        return 
      } else if(playerType === 'fire' && enemyType === 'ground'){
        monstermons[i].ataques.unshift({ nombre:'Fuego 🔥', id:'btn-fire'})
        messageAdvantage()
      } else if (playerType === 'water' && enemyType === 'fire'){
        monstermons[i].ataques.unshift({ nombre:'Agua 💧', id:'btn-water'})
        messageAdvantage()
      } else if (playerType === 'ground' && enemyType === 'water'){
        monstermons[i].ataques.unshift({ nombre:'Tierra 🌱', id:'btn-land'})
        messageAdvantage()
      } else {
        let paragrahAdvantage = document.createElement("p")
        paragrahAdvantage.style.color = 'red'
        paragrahAdvantage.innerHTML = 'el enemigo obtiene ventaja de tipo monstermon +1 ataque'
        msmAdvantage.appendChild(paragrahAdvantage)
      }
    }
  }
}

function typeAdvantageEnemy(playerType, enemyType) {
  if (playerType === enemyType ) {
    return 
  } else if(playerType === 'fire' && enemyType === 'water'){
    grupAtackMonster.unshift({ nombre:'Agua 💧', id:'btn-water'})
  } else if (playerType === 'water' && enemyType === 'ground'){
    grupAtackMonster.unshift({ nombre:'Tierra 🌱', id:'btn-land'})
  } else if (playerType === 'ground' && enemyType === 'fire'){
    grupAtackMonster.unshift({ nombre:'Fuego 🔥', id:'btn-fire'})
  }
  console.log(grupAtackMonster)
}

function imgPlayers(extractImgPlayer, extractImgEnemy){
  console.log(extractImgPlayer,  extractImgEnemy)
  let imgPlayer = document.createElement("img")
  let imgEnemy = document.createElement("img")
  
  imgPlayer.src = extractImgPlayer
  imgEnemy.src = extractImgEnemy

  divImgPlayer.appendChild(imgPlayer)
  divImgEnemy.appendChild(imgEnemy)

}

function messageAdvantage() {
  let paragrahAdvantage = document.createElement("p")
  paragrahAdvantage.classList.add('msm-advantage')
  paragrahAdvantage.innerHTML = 'Haz optenido ventaja de tipo monstermon +1 ataque'
  msmAdvantage.appendChild(paragrahAdvantage)
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
        botton.disabled = true;
      } else if(e.target.textContent === 'Agua 💧') {
        playerAtack.push('Agua 💧')
        botton.style.opacity = '0.5'
        botton.disabled = true;
      } else {
        playerAtack.push('Tierra 🌱')
        botton.style.opacity = '0.5'
        botton.disabled = true;
      }
      console.log('PLAYER',playerAtack)
      enemyRandomAtack()
    })
  })
}

function enemyRandomAtack() {
  let randomAtack = random(0, grupAtackMonster.length -1 );
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
  } else if (winsPlayer  > winsEnemy) {
    sectionrRestart.style.display = "block";
    createMessageGameOver("Huurra!! 😎 haz ganado la partida 😎 FIN JUEGO")
  } else {
    sectionrRestart.style.display = "block";
    createMessageGameOver("Opps!! 😢 haz perdido la partida 😢 FIN JUEGO")
  }
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

function picturImg() {
  // ghatopo.x = ghatopo.x + ghatopo.speedX
  ghatopo.x = ghatopo.x + ghatopo.speedX
  ghatopo.y = ghatopo.y + ghatopo.speedY
  lienzo.clearRect(0,0, mapa.width, mapa.height)
  lienzo.drawImage(
    ghatopo.mapaFoto,
    ghatopo.x,
    ghatopo.y,
    ghatopo.width,
    ghatopo.height,
  )  
}

function moverMontermonX() {
  // ghatopo.x = ghatopo.x + 5 
  // picturImg()
  ghatopo.speedY = 5 
}
function moverMontermonY() {
  // ghatopo.x = ghatopo.x + 5 
  // picturImg()
  ghatopo.speedY = -5
}

function espeararMovimiento() {
  ghatopo.speedX = 0
  ghatopo.speedY = 0
}

// el objeto global windows ecucha 'load'
// indicaldo de que todo el contenido HTML ya CARGO
window.addEventListener("load", startGame);
