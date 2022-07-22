function randomSelect(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function emojiOption(players) {
  let emojiResult;
  if (players == 1) {
    emojiResult = "👊";
  } else if (players == 2) {
    emojiResult = "✋";
  } else if (players == 3) {
    emojiResult = "✌️";
  } else {
    emojiResult = alert("EL DATO NO ES VALIDO!!");
    emojiResult = "DENEGADO";
  }
  return emojiResult;
}

function faight(player1, player2) {
  if (player1 == player2) {
    document.write("<h3> Oops!! Es un EMPATE 😆 </h3>");
    faightResult = "EMPATE";
  } else if (player1 == 1 && player2 == 3) {
    document.write("<h3>TU GANAS 😎 (👊) > (✌️) </h3>");
    faightResult = "GANASTE";
  } else if (player1 == 2 && player2 == 1) {
    document.write("<h3> TU GANAS 😎 (✋) > (👊) </h3>");
    faightResult = "GANASTE";
  } else if (player1 == 3 && player2 == 2) {
    document.write("<h3> TU GANAS 😎 (✌️) > (✋) </h3>");
    faightResult = "GANASTE";
  } else {
    document.write("<h3> OOO NOO! PIERDES 😢 </h3>");
    faightResult = "PERDISTE";
  }
}

let wins = 0;
let loss = 0;
let draw = 0;

while (wins < 3 && loss < 3) {
  let PC = randomSelect(1, 3);
  let player = parseInt(
    prompt(
      " eligue una opcion + donde: \n  1 = Piedra \n  2 = Papel \n  3 = Tijera "
    )
  );

  document.write(`<h2> usted es escogió: ${emojiOption(player)} </h2>`);
  document.write(`<h2>la computadora es escogió: ${emojiOption(PC)} </h2>`);

  faight(player, PC);

  if (faightResult == "GANASTE") {
    wins++;
  } else if (faightResult == "EMPATE") {
    draw++;
  } else {
    loss++;
  }
}
document.write(`perdiste: ${loss} empates: ${draw} ganaste: ${wins}`);
