const db = require('../db')
const MenuItem = require('../models/menuitem')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const menuitems = [
    { name: 'Brews',
      type: 'drink',
      description: `Regular rotation of microbrews from local breweries. Ask your server what's on tap!`,
      image: `https://www.canva.com/design/DAEfu0kmGec/hpjnvikTuU2dHTpTdhzm9w/view?utm_content=DAEfu0kmGec&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 10 },

    { name: 'Cocktails',
      type: 'drink',
      description: `Mixologist's choice. Ask your server about the nightly cocktail special!`,
      image: `https://www.canva.com/design/DAEfu1drCoU/ynjKtYjWKoqKaKoAeP5Wag/view?utm_content=DAEfu1drCoU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`,
      price: 15},
    
    { name: 'Bubbles',
      type: 'drink',
      description: `Domestic and international sparkling wine specials on rotation. Ask our sommelier about our nose-tickling bubbles!`,
      image: `https://www.canva.com/design/DAEfu-K7FBk/eNLIPqGE0ac5w7VdfAxaCA/view?utm_content=DAEfu-K7FBk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 15},

    { name: 'Red Wines',
      type: 'drink',
      description: `Domestic and imported red wines on rotation. Ask our sommelier about the nightly red pairings!`,
      image: `https://www.canva.com/design/DAEfu2_vnQ0/NovuiW_zz_us5ucq2La04w/view?utm_content=DAEfu2_vnQ0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 20},  

    { name: 'White Wines',
      type: 'drink',
      description: `Domestic and imported white wines on rotation. Ask our sommelier about the nightly white pairings!`,
      image: `https://www.canva.com/design/DAEfu7o0QRY/jOzwg9W89pQK8mIu19aTIQ/view?utm_content=DAEfu7o0QRY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 20},  

    { name: 'Bruschetta',
      type: 'app',
      description: 'Housemade bread brushed with garlic-infused olive oil, a pinch of salt, and topped with garden fresh tomatoes, onion, and herbs.',
      image: "https://imgur.com/tDKsRMt",
      price: 12},

    { name: 'Charcuterie Board',
      type: 'app',
      description: 'A balanced selection of the finest cheeses and house-cured meats.',
      image: `https://www.canva.com/design/DAEfvF6pn38/xzqpTc718ZTvEWqI7uI4Ug/view?utm_content=DAEfvF6pn38&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 15},
    
    { name: `Chef's Antipasto`,
      type: 'app',
      description: `Ask your server about Chef's Antipasto Special for this evening!`,
      image: `https://www.canva.com/design/DAEfvF3h-tY/2K9Rl5r-h-869uloMFq6-A/view?utm_content=DAEfvF3h-tY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 12},

    { name: 'Carne di Manzo',
      type: 'dinner',
      description: 'Dry-aged, Delmonico steak: served with seasonal vegetables and your choice of risotto, gemelli, gnocchi or potato cakes.',
      image: `https://www.canva.com/design/DAEfvFIGzCI/kjAVegv70okULTZUjodhMw/view?utm_content=DAEfvFIGzCI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 75},

    { name: 'Carne di Maiale',
      type: 'dinner',
      description: 'Farm-to-table, double cut porkchop: served with seasonal vegetables and your choice of risotto, gemelli, gnocchi or potato cakes.',
      image: `https://www.canva.com/design/DAEfvLrurgw/VE7N18SGxQYJ4AsBvnQEBQ/view?utm_content=DAEfvLrurgw&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 55},

    { name: 'Pollo Grigliato',
      type: 'dinner',
      description: 'Ethically raised and killed, free-range chicken: served with seasonal vegetables and your choice of risotto, pappardelle, gemelli, or potato cakes.',
      image: `https://www.canva.com/design/DAEfvN6XLrM/cL_Pf9WjX_tgKpe5-QUY1g/view?utm_content=DAEfvN6XLrM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 45},
    
    { name: 'Pesce Alla Griglia',
      type: 'dinner',
      description: 'Market fish special: served with seasonal vegetables and your choice of risotto, pappardelle, gemelli, or potato cakes.',
      image: `https://www.canva.com/design/DAEfvN-jUIY/osne4W2u4deiWV3NnIdDUw/view?utm_content=DAEfvN-jUIY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 65},  

    { name: 'Gelato',
      type: 'dessert',
      description: `There's always room for gelato! Ask your server about our rotating, locally-sourceditali gelato specials.`,
      image: `https://www.canva.com/design/DAEfvJNs7B8/k_Z41ZdtlSKWNjTwCyKdMg/view?utm_content=DAEfvJNs7B8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 12},

    { name: 'Flower Pot Semifreddo',
      type: 'dessert',
      description: 'Enjoy our Flower Pot Semifreddo, hand-crafted by our in-house pasticciere. This colorful dish is designed to look just like a spilled flower pot, however, every piece of this semifreddo is ediable... even the flower on top!',
      image: `https://www.canva.com/design/DAEfvLQFssI/SrmX8B7ue6q8bT1VRj1sBg/view?utm_content=DAEfvLQFssI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 15},

    { name: 'Tiramisu',
      type: 'dessert',
      description: `Made with Disaronno and our house-roasted espresso beans, this rich dessert is the perfect end to any meal.`,
      image: `https://www.canva.com/design/DAEfvAgRNJk/_BZMoVWTcC_YFw1S712NKw/view?utm_content=DAEfvAgRNJk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
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
