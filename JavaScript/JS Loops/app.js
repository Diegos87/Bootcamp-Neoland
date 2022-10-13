// iteracion 1

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

products.forEach((product) => {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
});

// iteracion 2

// iteracion 3

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (let place of placesToTravel) {
  console.log("lugar para visitar ", place);
}

// iteracion 4

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const key in alien) {
  console.log(alien);
}

// iteracion 5

const placesToTravel1 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

let placesWithNoId = [];

for (let i = 0; i < placesToTravel1.length; i++) {
  const place = placesToTravel1[i];
  if (place.id != 11 && place.id != 40) {
    placesWithNoId.push(place);
  }
}

console.log(placesWithNoId);

// iteracion 6

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let toysNoCat = [];

for (toy of toys) {
  if (!toy.name.includes("gato")) {
    toysNoCat.push(toy);
  }
}
console.log(toysNoCat);

// iteracion 7

const toys1 = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

const popularToys = [];

for (toy1 of toys1) {
  if (toy1.sellCount > 15) {
    popularToys.push(toy1);
  }
}

console.log(popularToys);
