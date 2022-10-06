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

/*const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(numbers1) {
  const total1 = numbers.reduce(
    (accumulator, numbers1) => accumulator + numbers1,
    0
  );
  return total1;
}*/

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
