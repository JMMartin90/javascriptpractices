const cartaArray = [
  {
    name: "patatas",
    img: "imagenes/fries.png",
  },
  {
    name: "hamburguesa",
    img: "imagenes/cheeseburger.png",
  },
  {
    name: "perrito",
    img: "imagenes/hotdog.png",
  },
  {
    name: "helado",
    img: "imagenes/ice-cream.png",
  },
  {
    name: "batido",
    img: "imagenes/milkshake.png",
  },
  {
    name: "pizza",
    img: "imagenes/pizza.png",
  },
  {
    name: "patatas",
    img: "imagenes/fries.png",
  },
  {
    name: "hamburguesa",
    img: "imagenes/cheeseburger.png",
  },
  {
    name: "perrito",
    img: "imagenes/hotdog.png",
  },
  {
    name: "helado",
    img: "imagenes/ice-cream.png",
  },
  {
    name: "batido",
    img: "imagenes/milkshake.png",
  },
  {
    name: "pizza",
    img: "imagenes/pizza.png",
  },
];

cartaArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const enseñarResultado = document.querySelector("#result");
let cartaEleccion = [];
let cartaEleccionIds = [];
let cartasGanadoras = [];

function createBoard() {
  for (let i = 0; i < cartaArray.length; i++) {
    const carta = document.createElement("img");
    carta.setAttribute("src", "imagenes/blank.png");
    carta.setAttribute("data-id", i);
    carta.addEventListener("click", descubreCarta);
    grid.appendChild(carta);
  }
}

function coincidencia() {
  const cartas = document.querySelectorAll("img");
  const opcionUnoId = cartaEleccionIds[0];
  const opcionDosId = cartaEleccionIds[1];

  if (opcionUnoId == opcionDosId) {
    cartas[opcionUnoId].setAttribute(`src`, "imagenes/blank.png");
    cartas[opcionDosId].setAttribute(`src`, "imagenes/blank.png");
    alert("coinciden!");
  } else if (cartaEleccion[0] === cartaEleccion[1]) {
    alert("lo tienes!");
    cartas[opcionUnoId].setAttribute(`src`, "imagenes/white.png");
    cartas[opcionDosId].setAttribute(`src`, "imagenes/white.png");
    cartas[opcionUnoId].removeEventListener("click", descubreCarta);
    cartas[opcionDosId].removeEventListener("click", descubreCarta);
    cartasGanadoras.push(cartaEleccion);
  } else {
    cartas[opcionUnoId].setAttribute("src", "imagenes/blank.png");
    cartas[opcionDosId].setAttribute("src", "imagenes/blank.png");
    alert("no coinciden, inutil!");
  }
  enseñarResultado.textContent = cartasGanadoras.length;
  cartaEleccion = [];
  cartaEleccionIds = [];

  if (cartasGanadoras.length === cartaArray.length / 2) {
    enseñarResultado.textContent = "Enhorabuena, todas coinciden!!";
  }
}

function descubreCarta() {
  let cartaId = this.getAttribute("data-id");
  cartaEleccion.push(cartaArray[cartaId].name);
  cartaEleccionIds.push(cartaId);
  console.log(cartaEleccion);
  console.log(cartaEleccionIds);
  this.setAttribute("src", cartaArray[cartaId].img);
  if (cartaEleccion.length === 2) {
    setTimeout(coincidencia, 500);
  }
}

createBoard()
