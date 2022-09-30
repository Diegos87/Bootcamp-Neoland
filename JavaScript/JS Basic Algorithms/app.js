let myFavoriteHero = "Hulk";
console.log(myFavoriteHero);
let x = 50;
let h = 5;
let y = 10;
let z = h + y;
console.log(x);
console.log(h);
console.log(y);
console.log(z);

const character = { name: "Jack Sparrow", age: "10" };
character.age = "25";
console.log(character);

let firstName = "Jon";
let lastName = "Snow";
let age = 24;

console.log(`Soy ${firstName} ${lastName}, tengo ${age} y me gustan los lobos`);

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };
console.log(toy1.price + toy2.price);

let globalBasePrice = 10000;
globalBasePrice = 25000;
console.log(globalBasePrice);

const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };
car1.finalPrice = car1.basePrice + globalBasePrice;
console.log(car1);
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car2);

let multi = 10 * 5;
console.log(multi);

let divi = 10 / 2;
console.log(divi);

let resto = 15 % 9;
console.log(resto);

let p = 10;
let j = 5;

let o = p + j;
console.log(o);

let c = 10;
let m = 5;

let i = c * m;
console.log(i);

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let avenger = avengers[0];
console.log(avenger);

avengers.splice(0, 1, "IRONMAN");
console.log(avengers);

console.log(avengers.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
let rickAndMortyCharacter =
  rickAndMortyCharacters[rickAndMortyCharacters.length - 1];
console.log(rickAndMortyCharacter);

console.log(rickAndMortyCharacters.length);
