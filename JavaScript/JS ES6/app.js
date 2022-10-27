// iteracion 1
//1.1
let a = 10;
let b = 5;
const suma1 = () => {
  console.log(a + b);
};

suma1();

//1.2
const suma2 = (a) => {
  console.log(a + b);
};

suma2(a);

//1.3
const suma3 = (a, b) => {
  console.log(a + b);
};

suma3(a, b);

//iteracion 2

//2.1

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const gameTitle = game.title;

console.log(gameTitle);

const { year } = game;

console.log(year);

//2.2

const fruits = ["Banana", "Strawberry", "Orange"];
const [fruits1, fruits2, fruits3] = fruits;
console.log(fruits1);
console.log(fruits2);
console.log(fruits3);

//2.3

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name: name2, race } = animalFunction();
console.log(name2, race);

//2.4

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name } = car;
const { itv } = car;

console.log(name);
console.log(itv);

const [year1, year2, year3] = itv;
console.log(year1);
console.log(year2);
console.log(year3);

//iteracion 3

//3.1

const pointsList = [32, 54, 21, 64, 75, 43];

const numeros = [...pointsList];
console.log(numeros);

//3.2

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copiaToy = { ...toy };

console.log(copiaToy);

//3.3

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const all = [...pointsList, ...pointsLis2];
console.log(all);

//3.4

const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const todosToy = { ...toy1, ...toyUpdate };
console.log(todosToy);

//3.5

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorsNoYellow = [];

for (i = 0; i < colors.length; i++) {
  if (!(i == 2)) {
    colorsNoYellow.push(colors[i]);
  }
}
console.log(colorsNoYellow);

//iteracion 4

//4.1

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

let usersName = [];

users.forEach((user) => {
  usersName.push(user.name);
});

let usersNames = users.map((user) => user.name);
console.log(usersName);
