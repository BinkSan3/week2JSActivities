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

for (let n = 9; n > 0; n--) {
  zeroToNine.push(n);
}

console.log(zeroToNine);
//This now work but only with -- and not -1

//ACTIVITY 4

let films = [
  "Dirty Dancing",
  "Shawshank Redemption",
  "Ghostbusters",
  "The Borrowers",
];

// films.splice(2, 1, "Killer");
//Just to test it

for (let g = 0; g < films.length; g++) {
  console.log(films[g]);
}

if (films[2] == "Ghostbusters") {
  console.log("Yay its Ghostbusters!");
} else {
  console.log("Boo we want Ghostbusters!");
}

//ACTIVITY 5

for (z = 0; z < 6; z++) {
  let store = Math.round(Math.random() * 30);
  if (store % 7 === 0) {
    console.log(`${store} is divisble by 7`);
  } else {
    console.log(`${store} is not`);
  }
}

//ACTIVITY 6

let bobsFollowers = ["Jaq", "Fynn", "Monse", "Ruby"];

let hannahsFollowers = ["Jamal", "Monse", "Dwayne", "Ruby"];

for (let b = 0; b < bobsFollowers.length; b++) {
  for (let h = 0; h < hannahsFollowers.length; h++) {
    if (bobsFollowers[b] === hannahsFollowers[h]) {
      console.log(hannahsFollowers[h]);
    }
  }
}

//ACTIVITY 7

//for loop

let testNumber = [];

for (let t = 0; t < 20; t++) {
  if (t % 5 === 0) {
    console.log(t);
  }
}

// while loop

let userList = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "Fusce",
  "vel",
  "pellentesque",
  "justo",
  "Sed",
  "imperdiet",
  "enim",
  "non",
  "sodales",
  "mollis",
  "In",
  "eu",
  "nisi",
  "facilisis",
  "libero",
  "rutrum",
  "condimentum",
  "Morbi",
  "quis",
  "arcu",
  "id",
  "sapien",
  "ullamcorper",
  "condimentum",
  "a",
  "id",
  "turpis",
  "Ut",
  "cursus",
  "ultrices",
  "egestas",
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "Sed",
  "non",
  "bibendum",
];

let p = 0;
// while (userList[p] != "Morbi") {
//   p++;
//   console.log(userList[p]);
// }

//do-while

do {
  console.log(userList[p]);
  p++;
} while (userList[p] != "Morbi");

// let test =
//   " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various v".split(
//     "e"
//   );

// console.log(test);
