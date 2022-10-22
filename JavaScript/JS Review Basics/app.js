// iteracion 1

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

let newMovies = [];

for (let movie of movies) {
  for (categorie of movie.categories) {
    if (!newMovies.includes(categorie)) {
      newMovies.push(categorie);
    }
  }
}

console.log(newMovies);

//iteracion 2

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let media;

let volumes = [];

for (let user of users) {
  for (let key in user.favoritesSounds) {
    volumes.push(user.favoritesSounds[key].volume);
  }
}

console.log(volumes);

const total = (todos) => {
  let acummulator = 0;
  for (let volume of todos) {
    acummulator += volume / todos.length;
  }
  return acummulator;
};

media = total(volumes);

console.log(media);

// iteracion 3

const users1 = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let sounds = [];

for (let user1 of users1) {
  for (let key in user1.favoritesSounds) {
    sounds.push(user1.favoritesSounds);
  }
}

console.log(sounds);

const favorites = (sonidos) => {
  let acumulador = 0;
  for (let sound of sonidos) {
    acumulador += sound;
  }
  return acumulador;
};

let all = favorites(users1);
console.log(all);

//iteracion 4

let array = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const findArrayIndex = (array, text) => {
  array.forEach((element, index) => {
    if (text == element) {
      console.log(index);
    }
  });
};

findArrayIndex(array, "Caracol");
findArrayIndex(array, "Mosquito");
findArrayIndex(array, "Salamandra");
findArrayIndex(array, "Ajolote");
findArrayIndex(array, "Tiburon");

// iteracion 5

// iteracion 6

const rollDice = (lados) => {
  return Math.ceil(Math.random() * lados);
};

console.log(rollDice(6));

// iteracion 6

let jugadores = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (jugador, index1, index2) => {
  const player1 = jugador[index1];
  const player2 = jugador[index2];
  jugador[index1] = player2;
  jugador[index2] = player1;
  console.log(jugador);
};

swap(jugadores, 3, 1);
