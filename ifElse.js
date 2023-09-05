// ACTIVITY 1

let age = 16;
let country = "USA";

if (age <= 17 && country == "UK") {
  console.log(" You aren't old enough!");
} else if (age > 17 && country != "UK") {
  console.log("Country not recognised");
} else if (age <= 17 && country != "UK") {
  console.log("You are not old enough and we dont know where you are");
} else {
  console.log("You are an oldie");
}

//ACTIVITY 2

let pizzaTopping = "tuna";

switch (pizzaTopping) {
  case "cheese":
  case "ham":
  case "mushroom":
  case "salami":
    console.log("These are important ingredients for my pizza.");
    break;
  case "tuna":
  case "prawns":
  case "anchovies":
  case "yello pepper":
    console.log(`${pizzaTopping} should not be on pizza.`);
    break;
  default:
    console.log(`I dont mind having ${pizzaTopping} on my pizza`);
}

//ACTIVITY 3

let password = "Password123";

if (password.length < 8) {
  console.log("Password is too short");
} else {
  console.log(password);
}

if (password.length % 5 == 0 || password.length % 3 == 0) {
  console.log("This password is divisible by 5 or 3");
} else {
  console.log("This password is a no no");
}
//Instead of creating a new variable called num with a number value data type, I have used the password length which is a number data type so can be used aswell

//ACTIVITY 4

let num = 30;

if (num % 3 == 0 && num % 5 == 0) {
  console.log("fizz buzz");
} else if (num % 5 == 0) {
  console.log("buzz");
} else if (num % 3 == 0) {
  console.log("fizz");
} else {
  console.log(`${num}`);
}

//ACTIVITY 5

let numPalindromeCheck = 10001;
// let lastDigit = numPalindromeCheck % 10;

const reverseNumber = numPalindromeCheck
  .toString()
  .split("")
  .reverse()
  .join("");

const isPalindrome = numPalindromeCheck == reverseNumber;

console.log(isPalindrome);
