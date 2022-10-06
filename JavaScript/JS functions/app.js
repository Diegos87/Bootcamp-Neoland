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
  const total = numbers.reduce(
    (accumulator, numbers) => accumulator + numbers,
    0
  );
  return total;
}

let total = sumAll(numbers);
console.log(total);
