//ACTIVITY 1

// let personName = "Roxanne";
// let personAge = 52;
// let personFavouriteColor = "Pink";

// console.log(
//   `My ${personAge} year old mother ${personName} loves the color ${personFavouriteColor} so for her ${personAge++} birthday, I am going to buy her a ${personFavouriteColor} dress.`
// );

// console.log(personAge++); // this works but the above doesnt

//ACTIVITY 1 Finished

let personName = "Roxanne";
let personAge = 52;
let personFavouriteColor = "Pink";

console.log(
  `${personName} is ${personAge} years old and their favourite color shoes are ${personFavouriteColor}.`
);

personName = "Sebastian";
personAge = 8;
personFavouriteColor = "blue";

console.log(
  `${personName} is ${personAge} years old and their favourite color shoes are ${personFavouriteColor}.`
);

//ACTIVITY 2

let myBreakfast = "Smoothie";
let myLunch = "Chicken Wrap";
let myDinner = "Pizza";

console.log(
  `Today for breakfast I had ${myBreakfast}. Then for lunch I made myself a ${myLunch}. Finally for my dinner I had a ${myDinner}.`
);

myBreakfast = "toast";
myLunch = "sandwich";
myDinner = "curry";

console.log(
  `Tomorrow for breakfast I will have ${myBreakfast}, then I will have ${myLunch} for lunch and finally for my dinner I will have ${myDinner}`
);

//ACTIVITY 3

// const today = new Date(2023, 09, 04);
// const birthDate = new Date(1994, 02, 12);

// const daysAlive = (today - birthDate).days;

// console.log(daysAlive);

// not quite
// let today = Date();
// let myBirthday = Date(1994, 02, 12);

// console.log(dayAlive);

const date = new Date();

//from here
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullDate = `${day}-${month}-${year}`;

console.log(fullDate);
//to here is just a test

const birthday = new Date("1994-02-12T00:00:01");

//so is here
let birthDay = birthday.getDate();
let birthMonth = birthday.getMonth() + 1;
let birthYear = birthday.getFullYear();

let fullBirthday = `${birthDay}-${birthMonth}-${birthYear}`;

console.log(fullBirthday);
//to here

// let daysAlive = fullDate - fullBirthday.days;

// console.log(daysAlive);
//these methods using the getMonth getDate etc returns NaN to the console which I assume is because it has to calculate in milli seconds.

const daysAlive = date - birthday;

console.log(daysAlive / 86400000);
//this method works
