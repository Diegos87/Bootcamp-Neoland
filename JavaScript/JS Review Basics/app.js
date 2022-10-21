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
