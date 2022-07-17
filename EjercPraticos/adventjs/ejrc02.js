const carta = '{bici coche balón _playstation bici coche peluche}'

function listGifts(letter) {
  let giftList = letter.split(" ");
  giftList = giftList.filter((item) => item);
  console.log(giftList);
  const resultObject = {};
  let currectElement = "";
  let counter = 0;

  giftList.map((gift) => {
    currectElement = gift;
    counter = 0;
    if (!currectElement.includes("_")) {
      giftList.map((interator) => {
        if (currectElement === interator) {
          counter += 1;
        }
        resultObject[`${currectElement}`] = counter;
      });
    }
  });

  return resultObject;
}

const regalos = listGifts(carta)
console.log(regalos)


function listGifts2(letter) {
  let palabras = letter.split(" ");
  palabras = palabras.filter((item) => item);
  let lista = {};

  for (let i = 0; i < palabras.length; i++) {
    if (!palabras[i].includes("_")) {
      if (lista[palabras[i]] == undefined) {
        lista[palabras[i]] = 1;
      } else {
        lista[palabras[i]] += 1;
      }
    }
  }
  return lista;
}

console.log(listGifts2(carta));
