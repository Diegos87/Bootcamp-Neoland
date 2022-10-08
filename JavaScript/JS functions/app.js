// Iteracion 1

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

let resultado = sum(4, 8);
console.log(resultado);

// Iteracion 2

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(list) {
  let longestword = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > longestword.length);
    {
      longestword = list[i];
    }
  }
  return longestword;
}
let longestword = findLongestWord(avengers);
console.log(longestword);

// Iteracion 3

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
  let accumulator = 0;
  for (let i = 0; i < numbers.length; i++) {
    accumulator += numbers[i];
  }
  return accumulator;
}
let total = sumAll(numbers);
console.log(total);

// Iteracion 4

const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(numbers1) {
  let accumulator1 = 0;
  for (let i = 0; i < numbers1.length; i++) {
    accumulator1 += numbers1[i] / numbers1.length;
  }
  return accumulator1;
}
let total1 = average(numbers1);
console.log(total1);

// Iteracion 5

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
const averageWord = (some) => {
  let add = 0;
  for (let valor of some) {
    if (typeof valor === "number") {
      add += valor;
    } else {
      add += valor.length;
    }
  }
  return add;
};

let totales = averageWord(mixedElements);
console.log(totales);

// Iteracion 6

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(things) {
  let result = [];
  for (let i = 0; i < things.length; i++) {
    let thing = things[i];
    if (!result.includes(things[i])) {
      result.push(thing);
    }
  }
  return result;
}

let newList = removeDuplicates(duplicates);
console.log(newList);

// Iteracion 7

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

const finderName = (heroes, hero) => {
  let heroesNewList = heroes.indexOf(hero);
  if (heroesNewList === -1) {
    return false;
  } else {
    return true, heroesNewList;
  }
};

let heroesList = finderName(nameFinder, "Logan");
console.log(heroesList);
