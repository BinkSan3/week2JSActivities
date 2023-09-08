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
      } else console.log(`${order2[i]} is not on the menu`);
    }
    console.log(`£${this.total2}`);
    let total = this.total1 + this.total2;
    console.log(`Final Total is: £${total}`);
  },
};

coffeeShop.drinksOrdered(["Latte", "Tea", "Smoothie"]);
coffeeShop.foodOrdered(["Rustic Sandwich", "Spinach Pie", "cookies"]);
