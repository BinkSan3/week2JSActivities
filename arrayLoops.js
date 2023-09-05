//JUST TO RECAP ARRAYS

let coffeOrder = ["Alex - Cortado", "Ben - Cortado", "Charlie - Whatevers new"];

coffeOrder[1] = "Ann - Vanilla latte";
coffeOrder.push("Donna - espresso");
coffeOrder.pop();

console.log(coffeOrder.length);

//ARRAYS
//ACTIVITY 1

let favSongs = [
  "Wande Coal - Iskaba",
  "Midas the Jagaban - Party like a Jagaban",
  "Dadju - Donne moi l'accord avec Burna Boy",
];

favSongs.push("DC - Neighbourhood", "Twista - Overnight Celebrity");
favSongs.pop();

favSongs.unshift("Suzy Q - Tonight");
favSongs.shift();

console.log(favSongs);

//ACTIVY 2

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

weekdays.splice(4, 1, "payday");

console.log(weekdays);
//changed friday to payday because index 4 would be the fifth day of the week being friday and the 1 menas that i replace 1 element.

//LOOPS

//just to recap

let favouriteDrink = [
  "Coffee",
  "Water",
  "Sprite",
  "Fredo Espresso",
  "Mojito",
  "Mogu Mogu",
];

// console.log(favouriteDrink[0]);
// console.log(favouriteDrink[1]);
// console.log(favouriteDrink[2]);

for (let i = 0; i < favouriteDrink.length; i++) {
  console.log(favouriteDrink[i]);
}

let multiplesTwo = [];

for (let k = 0; k < 20; k++) {
  if (k % 2 == 0) {
    multiplesTwo.push(k);
  }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

//LOOPS
//ACTIVITY 1

let faveFilms = [
  "Inception",
  "Untouchable",
  "City of God",
  "John Wick",
  "Harry Potter",
];

faveFilms.push("Moana", "Brother Bear");

for (let f = 0; f < faveFilms.length; f++) {
  console.log(faveFilms[f]);
}

//Activity 2

let generate = [];

for (let r = 0; r < 6; r++) {
  generate.push(Math.round(Math.random() * 50));
}

console.log(`random number between 1 and 50 is ${generate}`);

//ACTIVITY 3

let zeroToNine = [];

for (let n = 9; n >= 0; n - 1) {
  zeroToNine.push(n);
}

console.log(zeroToNine);
