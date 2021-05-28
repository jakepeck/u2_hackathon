const db = require('../db')
const MenuItem = require('../models/menuitem')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const menuitems = [
    { name: 'Brews',
      type: 'drink',
      description: `Regular rotation of microbrews from local breweries. Ask your server what's on tap!`,
      image: "Brews.png",
      price: 10 },

    { name: 'Cocktails',
      type: 'drink',
      description: `Mixologist's choice. Ask your server about the nightly cocktail special!`,
      image: "Cocktails.png",
      price: 15},
    
    { name: 'Bubbles',
      type: 'drink',
      description: `Domestic and international sparkling wine specials on rotation. Ask our sommelier about our nose-tickling bubbles!`,
      image: "Bubbles.png",
      price: 15},

    { name: 'Red Wines',
      type: 'drink',
      description: `Domestic and imported red wines on rotation. Ask our sommelier about the nightly red pairings!`,
      image: "RedWines.png",
      price: 20},  

    { name: 'White Wines',
      type: 'drink',
      description: `Domestic and imported white wines on rotation. Ask our sommelier about the nightly white pairings!`,
      image: "WhiteWines.png",
      price: 20},  

    { name: 'Bruschetta',
      type: 'app',
      description: 'Housemade bread brushed with garlic-infused olive oil, a pinch of salt, and topped with garden fresh tomatoes, onion, and herbs.',
      image: "Bruschetta.png",
      price: 12},

    { name: 'Charcuterie Board',
      type: 'app',
      description: 'A balanced selection of the finest cheeses and house-cured meats.',
      image: "CharcuterieBoard.png",
      price: 15},
    
    { name: `Chef's Antipasto`,
      type: 'app',
      description: `Ask your server about Chef's Antipasto Special for this evening!`,
      image: "antipasto.png",
      price: 12},

    { name: 'Carne di Manzo',
      type: 'dinner',
      description: 'Dry-aged, Delmonico steak: served with seasonal vegetables and your choice of risotto, gemelli, gnocchi or potato cakes.',
      image: "Delmonico.png",
      price: 75},

    { name: 'Carne di Maiale',
      type: 'dinner',
      description: 'Farm-to-table, double cut porkchop: served with seasonal vegetables and your choice of risotto, gemelli, gnocchi or potato cakes.',
      image: "doubleCutPorkChop.png",
      price: 55},

    { name: 'Pollo Grigliato',
      type: 'dinner',
      description: 'Ethically raised and killed, free-range chicken: served with seasonal vegetables and your choice of risotto, pappardelle, gemelli, or potato cakes.',
      image: "chicken.png",
      price: 45},
    
    { name: 'Pesce Alla Griglia',
      type: 'dinner',
      description: 'Market fish special: served with seasonal vegetables and your choice of risotto, pappardelle, gemelli, or potato cakes.',
      image: "fish.png",
      price: 65},  

    { name: 'Gelato',
      type: 'dessert',
      description: `There's always room for gelato! Ask your server about our rotating, locally-sourceditali gelato specials.`,
      image: "gelato.png",
      price: 12},

    { name: 'Flower Pot Semifreddo',
      type: 'dessert',
      description: 'Enjoy our Flower Pot Semifreddo, hand-crafted by our in-house pasticciere. This colorful dish is designed to look just like a spilled flower pot, however, every piece of this semifreddo is ediable... even the flower on top!',
      image: "flowerPot.png",
      price: 15},

    { name: 'Tiramisu',
      type: 'dessert',
      description: `Made with Disaronno and our house-roasted espresso beans, this rich dessert is the perfect end to any meal.`,
      image: "tiramisu.png",
      price: 13}      
]

  await MenuItem.insertMany(menuitems)
  console.log("Added some menu items!")
}
const run = async () => {
  await main()
  db.close()
}

run()
