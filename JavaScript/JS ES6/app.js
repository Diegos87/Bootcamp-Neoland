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

const usersNames = users.map((user) => user.name);
console.log(usersNames);

//4.2
let usersNameWithA = [];
const usersNameWithA1 = users.map((user) => {
  if (user.name.charAt(0) == "A") {
    user = "Anacleto";
    usersNameWithA.push(user);
  } else {
    usersNameWithA.push(user.name);
  }
});

console.log(usersNameWithA);

//4.3

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesVisited = cities.map((citie) => {
  if (citie.isVisited == true) {
    citie.name += " Visited";
  }
  return citie.name;
});

console.log(citiesVisited);

// iteracion 5

//5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const overEighteen = ages.filter((age) => age > 18);
console.log(overEighteen);

//5.2

const parAges = ages.filter((age) => age % 2 == 0);
console.log(parAges);

//5.3

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const leagueOfLegends = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);

console.log(leagueOfLegends);

//5.4

const nameWithU = streamers.filter((streamer) => streamer.name.includes("u"));
console.log(nameWithU);

//5.5

const newStreamers = streamers.filter((streamer) => {
  const returnLegends = streamer.gameMorePlayed
    .toLowerCase()
    .includes("legends");
  if (returnLegends && streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
  }
  return returnLegends;
});
console.log(newStreamers);

//6.1

const numbers = [32, 21, 63, 95, 100, 67, 43];
const found = numbers.find((number) => number === 100);
console.log(found);

//6.2

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const foundMovie = movies.find((year) => year.date === 2010);
console.log(foundMovie);
