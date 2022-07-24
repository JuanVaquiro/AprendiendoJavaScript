let playerAtack;
let enemyAtack;
let playerLifes = 3;
let enemylifes = 3;
let resultCombat;

function startGame() {
  // ocultar section
  let sectionAtackSelect = document.getElementById("atack-select");
  sectionAtackSelect.style.display = "none";

  let sectionrRestart = document.getElementById("restart-select");
  sectionrRestart.style.display = "none";

  let btnPlayer = document.getElementById("btn-animalSelect");
  btnPlayer.addEventListener("click", selectMonsterPlayer);

  let btnFire = document.getElementById("btn-fire");
  btnFire.addEventListener("click", fireAtack);
  let btnWater = document.getElementById("btn-water");
  btnWater.addEventListener("click", waterAtack);
  let btnLand = document.getElementById("btn-land");
  btnLand.addEventListener("click", landAtack);

  let btnRestart = document.getElementById("btn-restart");
  btnRestart.addEventListener("click", gameRestart);
}

function selectMonsterPlayer() {
  let sectionMonsterkSelect = document.getElementById("monster-select");
  sectionMonsterkSelect.style.display = "none";

  let sectionAtackSelect = document.getElementById("atack-select");
  sectionAtackSelect.style.display = "flex";

  let inpuntDrangpo = document.getElementById("Dragonpo");
  let inpuntLionpo = document.getElementById("Lionpo");
  let inpuntCocodripo = document.getElementById("Cocodripo");
  let playerSpan = document.getElementById("monster-player");

  if (inpuntDrangpo.checked) {
    playerSpan.innerHTML = "Dragonpo";
  } else if (inpuntLionpo.checked) {
    playerSpan.innerHTML = "Lionpo";
  } else if (inpuntCocodripo.checked) {
    playerSpan.innerHTML = "Cocodripo";
  } else {
    alert("Oops!! algo salio Mal \n Porfavor selecciona un Monstermon");
    let sectionAtackSelect = document.getElementById("atack-select");
    sectionAtackSelect.style.display = "none";

    let sectionMonsterkSelect = document.getElementById("monster-select");
    sectionMonsterkSelect.style.display = "flex";
  }
  selectMonsterEnemy();
}

function selectMonsterEnemy() {
  let randomMonster = random(1, 3);
  let enemySpan = document.getElementById("monster-enemy");

  if (randomMonster == 1) {
    enemySpan.innerHTML = "Dragonpo";
  } else if (randomMonster == 2) {
    enemySpan.innerHTML = "Lionpo";
  } else {
    enemySpan.innerHTML = "Cocodripo";
  }
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
  let spanLifePlayer = document.getElementById("life-player");
  let spanLifeEnemy = document.getElementById("life-enemy");

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

  playerWin();
}

function playerWin() {
  if (playerLifes == 0) {
    let sectionrRestart = document.getElementById("restart-select");
    sectionrRestart.style.display = "block";
    alert(`Opps!! ☠ haz perdido la partida ☠ \n FIN JUEGO`);
    disableButton();
  } else if (enemylifes == 0) {
    let sectionrRestart = document.getElementById("restart-select");
    sectionrRestart.style.display = "block";
    alert(`Huurra!! 🏆 haz ganado la partida 🏆 \n FIN JUEGO`);
    disableButton();
  }
}

function disableButton() {
  let btnFire = document.getElementById("btn-fire");
  btnFire.disabled = true;
  let btnWater = document.getElementById("btn-water");
  btnWater.disabled = true;
  let btnLand = document.getElementById("btn-land");
  btnLand.disabled = true;
}

function createMessage() {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = `atacaste con ${playerAtack} <br/>
    el enemigo ataca con ${enemyAtack} <br/> ${resultCombat}`;

  let sectionMessage = document.getElementById("messages");
  sectionMessage.appendChild(paragraph);
}

function gameRestart() {
  location.reload();
}

// el objeto global windows ecucha 'load'
// indicaldo de que todo el contenido HTML ya CARGO
window.addEventListener("load", startGame);
