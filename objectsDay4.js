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

let coffeeShop = {
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

coffeeShop.drinkOrdered(["Cappucino", "Latte"]);
coffeeShop.foodOrdered(["Pie", "Sandwich"]);
coffeeShop.totalPrice();

console.log(`Your order is ${coffeeShop.drinkOrdered()}`);
