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

// ACTIVITY 6

let time = 25;
let placeOfWork = "work";
let townOfHome = "home";

if (time >= 8 && time <= 9) {
  console.log(`If the time is ${time.toFixed(2)}. I am commuting.`);
} else if (time > 9 && time <= 17.0) {
  console.log(`If the time is ${time.toFixed(2)}. I am at ${placeOfWork}`);
} else if (time < 24) {
  console.log(`If the time is ${time.toFixed(2)}. I am at ${townOfHome}`);
} else {
  console.log("This isnt a valid time");
}

// the problem with this is that this represents as a 24hr clock but will accept invalid times such as 22.70 which realistically is 23.10

//ACTIVITY 7

let randomWord =
  "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let lastVowel;
if (/[aeiou]/.test(randomWord)) {
  lastVowel = randomWord.split("").reverse().join("").lastIndexOf("a");
} else {
  lastVowel = null;
}
console.log(lastVowel);

console.log(randomWord.charAt(69));
//the above can test the answer

//ACTIVITY 8

let word = "mariam";
word = "stevie";

if (word.charAt(0) === word.split("").reverse().join("").charAt(0)) {
  console.log(true);
} else {
  console.log(false);
}

// let word = "mariam";

// let endLetter = word.split("").reverse().join("").charAt(0)

// let check = word.charAt(0) == endLetter

// console.log(check)

//ACTIVITY 9

let num1 = 3;
let num2 = 4;
let sum = num1 + num2;

if (sum % 2 === 0) {
  console.log(sum);
} else {
  console.log(num1 * num2);
}

//or

const addUp = () => {
  return num1 + num2;
};

const oddOrEven = () => {
  if (addUp % 2 === 0) {
    return addUp;
  } else {
    return num1 * num2;
  }
};

console.log(oddOrEven());
