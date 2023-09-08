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

  drinksOrdered(order) {
    for (o = 0; o < this.drinks.length; o++) {
      let test = this.drinks[o] == order;
    }
    if ((test = true)) {
      console.log(`You have ordered a ${order} `);
      let addUp = this.drinks[o++];
      console.log(this.drinks[o++]);
    }
  },
};

coffeeShop.drinksOrdered("[Latte", "Tea]");
