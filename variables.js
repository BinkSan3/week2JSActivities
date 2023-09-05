console.log("this is my variables file");

// let
// const
// var

let myName = "Jazmyne";
let myAge = 29;
let gotAHeadache = true;
const bornIn = "Osaka"; //const keeps locked

console.log(myName);

myName = "Jake";

console.log(myName);

// bornIn = "Japan"

// var myAddress = "North West"

console.log(2 + 5);
console.log(7 - 5);
console.log(3 * 3);
console.log(3 ** 3);
console.log(15 / 3);
console.log(15 % 3); //modulus operator //useful for pagination

let myNum = 4;

myNum++; //increment

console.log(myNum); //should be 5

let balance = 100;

let withdrawalAmount = 30;

console.log((balance = balance - withdrawalAmount));
//need = which is the assignment operator for new balance

console.log(balance);

balance -= withdrawalAmount;

let favouriteDrink = "water";

console.log(
  "My name is " + myName + ". My favourite drink is " + favouriteDrink
); //this is concatination

console.log(`My name is ${myName} and my favourite drink is ${favouriteDrink}`); // this is an easier way of doing concatination and it is a template literal

//it is good to use delimiters which is a semicolon at the end of each script
