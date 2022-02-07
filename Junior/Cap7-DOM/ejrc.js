const contenedor = document.querySelector(".container-flx");

const keyCreat = ( name, model, price ) => {
    img = "<img class='llave-png' src='https://e7.pngegg.com/pngimages/161/257/png-clipart-key-skeleton-key-quando.png'>";
    name = `<h2>${name}</h2>`;
    model = `<h3>${model}</h3>`;
    price = `<p>Precio: </p><b class='price'>$${price}</b>`;
    return[ img, name, model, price, ];
};

let documentFragment = document.createDocumentFragment();

for (let i = 1; i < 13; i++) {
    let modelRandom = Math.round(Math.random()*1000);
    let priceRandom = Math.round(Math.random()*10+30);
    let llave = keyCreat(`llave ${i}`,`modelo ${modelRandom}`,priceRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modelRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = [...llave];
    documentFragment.appendChild(div);
}
contenedor.appendChild(documentFragment)