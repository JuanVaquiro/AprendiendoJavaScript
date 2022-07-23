let  playerAtack
let  enemyAtack
let  resultCombat

function startGame() {
  let btnPlayer = document.getElementById("btn-animalSelect");
  btnPlayer.addEventListener("click", selectMonsterPlayer);

  let btnFire = document.getElementById('btn-fire')
  btnFire.addEventListener('click', fireAtack)
  let btnWater = document.getElementById('btn-water')
  btnWater.addEventListener('click', waterAtack)
  let btnLand = document.getElementById('btn-land')
  btnLand.addEventListener('click', landAtack)
}

function selectMonsterPlayer() {
  let inpuntDrangpo = document.getElementById("Dragonpo");
  let inpuntLionpo = document.getElementById("Lionpo");
  let inpuntCocodripo = document.getElementById("Cocodripo");
  let playerSpan = document.getElementById('monster-player')

  if (inpuntDrangpo.checked) {
    playerSpan.innerHTML = 'Dragonpo'
  } else if (inpuntLionpo.checked) {
    playerSpan.innerHTML = 'Lionpo'
  } else if (inpuntCocodripo.checked) {
    playerSpan.innerHTML = 'Cocodripo'
  } else {
    alert("Oops!! algo salio Mal \n Porfavor selecciona un Monstermon")
  }

  selectMonsterEnemy()
}

function selectMonsterEnemy() {
    let randomMonster = random(1, 3)
    let enemySpan = document.getElementById('monster-enemy')

    if ( randomMonster == 1) {
        enemySpan.innerHTML = 'Dragonpo'
    } else if (randomMonster == 2) {
        enemySpan.innerHTML = 'Lionpo'
    } else {
        enemySpan.innerHTML = 'Cocodripo'
    } 
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function fireAtack() {
    playerAtack = 'FUEGO 🔥'
    enemyRandomAtack()
}
function waterAtack() {
    playerAtack = 'AGUA 💧'
    enemyRandomAtack()
}
function landAtack() {
    playerAtack = 'TIERRA 🌱'
    enemyRandomAtack()
}

function enemyRandomAtack() {
    let randomAtack = random(1, 3)
    if ( randomAtack == 1) {
        enemyAtack = 'FUEGO 🔥'
    } else if (randomAtack == 2) {
        enemyAtack = 'AGUA 💧'
    } else {
        enemyAtack = 'TIERRA 🌱'
    } 
    console.log(resultCombat)
    combat()
    console.log(resultCombat)
    createMessage()
    console.log(resultCombat)
    
}

function combat() {
    if (playerAtack == enemyAtack) {
        resultCombat = 'EMPATE'
    } else if( playerAtack == 'FUEGO' && enemyAtack == 'TIERRA') {
        resultCombat = 'GANASTE'
    } else if( playerAtack == 'AGUA' && enemyAtack == 'FUEGO' ){
        resultCombat = 'GANASTE'
    } else if( playerAtack == 'TIERRA' && enemyAtack == 'AGUA' ){
        resultCombat = 'GANASTE'
    } else {
        resultCombat = 'PIERDES'
    }
}


function createMessage() {
    let paragraph = document.createElement('p')
    paragraph.innerHTML = `atacaste con ${playerAtack} <br/>
    el enemigo ataca con ${enemyAtack} <br/> ${resultCombat}`

    let sectionMessage = document.getElementById('messages')
    sectionMessage.appendChild(paragraph)
}

// el objeto global windows ecucha 'load'
// indicaldo de que todo el contenido HTML ya CARGO
window.addEventListener("load", startGame);