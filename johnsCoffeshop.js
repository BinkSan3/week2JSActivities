let coffeeShop = {
  name: "John's coffee shop",
  drinkMenu: ["Coffee", 3, "Tea", 2],
  foodMenu: ["Sandwich", 5, "Cake", 3],
  total: 0,

  drinkOrder(drinks) {
    for (let i = 0; i < drinks.length; i++) {
      let indexOfItem = this.drinkMenu.indexOf(drinks[i]);

      if (indexOfItem != -1) {
        console.log(drinks[i], this.drinkMenu[indexOfItem + 1]);
        this.total += this.drinkMenu[indexOfItem + 1];
      } else console.log(`${drinks[i]} not on menu`);
    }
    console.log(this.total);
  },
};

coffeeShop.drinkOrder(["Coffee", "Coffee", "Tea"]);
