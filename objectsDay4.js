let person = {
  name: "John",
  age: 23,
  sayHi() {
    return `Hello my name is ${this.name}`;
  },
};

//object.property ie person.name console.log etc
//creating own objects

//bracket notation
//console.log(person["name"])
// is a string

let objectKey = "name";

console.log(person.name);

console.log(person["name"]);

console.log(person[objectKey]);

//ACTIVITY 1

console.log(person.sayHi());

//ACTIVITY 2

let pet = {
  name: "Squishy",
  typeOfPet: "Jellyfish",
  age: 2,
  color: "Pink",
  eat() {
    return `${this.name} is eating`;
  },
  drink() {
    return `${this.name} is drinking`;
  },
};

console.log(pet.eat());
console.log(pet.drink());

//ACTIVITY 3

// let coffeeShop = {
//   name: "Sempe",
//   branch: "Liverpool",
//   drinks: ["Espresso", "Latte", "Cappucino"],
//   drinkPrice: [2, 3.5, 4.0],
//   drinkOrdered(order1, order2) {
//     for (o = 0; o < this.drinks.length; o++) {
//       if (this.drinks[o] === order1 || this.drinks[o] === order2) {
//         console.log(this.drinkPrice[o]);
//       }
//     }
//   },

let cafe = {
  name: "Sempe",
  branch: "Liverpool",
  drinks: ["Espresso", "Latte", "Cappucino"],
  drinkPrice: [2, 3.5, 4.0],
  drinksTally: 0,
  food: ["Sandwich", "Cake", "Pie"],
  foodPrice: [7.0, 5, 6],
  foodTally: 0,
  drinkOrdered(order) {
    for (o = 0; o < order.length; o++) {
      let itemIndex = this.drinks.indexOf(order[o]);
      if (itemIndex != -1) {
        console.log(this.drinkPrice[itemIndex]);
        this.drinksTally += this.drinkPrice[itemIndex]; //this means ths.drinksTally = this.drinksTally + this.drinksPrice[o]
      }
    }
    console.log(this.drinksTally);
  },
  foodOrdered(order) {
    for (o = 0; o < order.length; o++) {
      let itemIndex = this.food.indexOf(order[o]);
      if (itemIndex != 1) {
        this.foodTally += this.foodPrice[itemIndex];
      }
    }
    console.log(this.foodTally);
  },
  totalPrice() {
    let addup = this.foodTally + this.drinksTally;
    console.log(addup);
  },
};

cafe.drinkOrdered(["Cappucino", "Latte"]);
cafe.foodOrdered(["Pie", "Sandwich"]);
cafe.totalPrice();

console.log(`Your order is ${cafe.drinkOrdered()}`);

let coffeeShop = {
  name: "Sempe",
  branch: "Liverpool",
  drinks: [
    "Espresso",
    2.0,
    "Latte",
    4.0,
    "Cappucino",
    3.5,
    "Hot chocolate",
    2.5,
    "Tea",
    2.0,
  ],
  food: [
    "Rustic Sandwich",
    7.95,
    "Short Cake",
    5.0,
    "Spinach Pie",
    4.5,
    "Banana Bread",
    3.45,
    "Crisps",
    1.5,
  ],
  total1: 0,
  total2: 0,

  drinksOrdered(order1) {
    for (let o = 0; o < order1.length; o++) {
      let indexOfItem = this.drinks.indexOf(order1[o]);

      if (indexOfItem != -1) {
        console.log(order1[o], `£${this.drinks[indexOfItem + 1].toFixed(2)}`);
        this.total1 += this.drinks[indexOfItem + 1];
      } else console.log(`${order1[o]} is not on menu`);
    }
    console.log(`drink total: £${this.total1.toFixed(2)}`);
  },
  foodOrdered(order2) {
    for (let i = 0; i < order2.length; i++) {
      let indexOfItem = this.food.indexOf(order2[i]);

      if (indexOfItem != -1) {
        console.log(order2[i], `£${this.food[indexOfItem + 1].toFixed(2)}`);
        this.total2 += this.food[indexOfItem + 1];
      } else console.log(`${order2} is not on the menu`);
    }
    console.log(`£${this.total2}`);
    let total = this.total1 + this.total2;
    console.log(`Final Total is: £${total}`);
  },
};

coffeeShop.drinksOrdered(["Latte", "Tea"]);
coffeeShop.foodOrdered(["Rustic Sandwich", "Spinach Pie"]);
