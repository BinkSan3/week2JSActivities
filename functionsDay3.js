//Functions Warm up

let age = 26;

if (age < 18) {
  console.log("Ticket price is £8");
} else if (age >= 18 && age < 60) {
  console.log("Ticket price is £10.95");
} else {
  console.log("Ticket price is £7.50");
}

const favColor = (color) => {
  console.log(`My fav color is ${color}`);
};

favColor("blue");

favColor("red");

//ACTIVITY 1

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(33));

// ACTIVITY 2

let orderCount = 0;

const takeOrder = (base, topping) => {
  console.log(`Order ${orderCount}: ${base} base pizza with ${topping}`);
  orderCount++;
};

takeOrder("bbq", "pineapple");
takeOrder("tomato", "ham");
takeOrder("sweet chilli", "chicken and sweetcorn");

//ACTIVITY 3

// let pinNumber = 4321;
// let balance = 40.05;

// const displayBalance = (pin, amount) => {
//   if (pin === pinNumber) {
//     console.log(`Your balance is: ${balance}`);
//     if (amount <= balance) {
//       console.log((balance - amount).toFixed(2));
//     } else {
//       console.log("Insufficient Funds");
//     }
//   } else {
//     console.log("Invalid pin");
//   }
// };

// displayBalance(4321, 20.0);

// console.log(
//   `Withdrawal of: ${amount} pounds. Your new balance is ${dispenseCash()}`
// );

//

// let pinNumber = 4321;

// const displayBalance = (pin, balance) => {
//   if (pin === pinNumber) {
//     console.log(`Your balance is: ${balance}`);
//   }
// };

// displayBalance(4321, 30.88);

// const dispenseCash = (amount) => {
//   if (amount < balance) {
//     console.log((balance = balance - amount));
//   } else console.log("Insufficient Funds");
// };

// dispenseCash(20);

// const dispenseCash = (amount) => {
//   if (amount < balance) {
//     return balance = balance - amount;
//   }
// };

// console.log(
//   `You have mad a withdrawal of: ${amount} pounds Your new balance is now: ${dispenseCash(
//     20
//   )}`
// );

// const dispenseCash = (pin, amount) => {
//   if (amount < displayBalance(number) && pin === pinNumber)
//     console.log((displayBalance = displayBalance - amount));
// };

// dispenseCash(4321, 20);

let pinNumber = 4321;
let balance = 40.05;

const displayBalance = (pin, amount) => {
  if (pin === pinNumber) {
    console.log(`Your balance is: ${balance}`);
    if (amount <= balance) {
      console.log(
        "Request to withdraw £" +
          amount +
          " accepted. Your new Balance is:" +
          (balance - amount).toFixed(2)
      );
    } else {
      console.log("Insufficient Funds");
    }
  } else {
    console.log("Invalid pin");
  }
};

displayBalance(4321, 20.0);
displayBalance(1234, 20.0);
displayBalance(4321, 50);

// This was tough. the commented out sections are various attempts.
