const db = require('../db')
const MenuItem = require('../models/menuitem')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const menuitems = [
    {
      name: 'Brews',
      type: 'drink',
      description: `Regular rotation of microbrews from local breweries. Ask your server what's on tap!`,
<<<<<<< HEAD
      image: `https://www.canva.com/design/DAEfu0kmGec/hpjnvikTuU2dHTpTdhzm9w/view?utm_content=DAEfu0kmGec&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 10
    },
=======
      image: "Brews.png",
      price: 10 },
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Cocktails',
      type: 'drink',
      description: `Mixologist's choice. Ask your server about the nightly cocktail special!`,
<<<<<<< HEAD
      image: `https://www.canva.com/design/DAEfu1drCoU/ynjKtYjWKoqKaKoAeP5Wag/view?utm_content=DAEfu1drCoU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`,
      price: 15
    },

    {
      name: 'Bubbles',
      type: 'drink',
      description: `Domestic and international sparkling wine specials on rotation. Ask our sommelier about our nose-tickling bubbles!`,
      image: `https://www.canva.com/design/DAEfu-K7FBk/eNLIPqGE0ac5w7VdfAxaCA/view?utm_content=DAEfu-K7FBk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 15
    },
=======
      image: "Cocktails.png",
      price: 15},
    
    { name: 'Bubbles',
      type: 'drink',
      description: `Domestic and international sparkling wine specials on rotation. Ask our sommelier about our nose-tickling bubbles!`,
      image: "Bubbles.png",
      price: 15},
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Red Wines',
      type: 'drink',
      description: `Domestic and imported red wines on rotation. Ask our sommelier about the nightly red pairings!`,
<<<<<<< HEAD
      image: `https://www.canva.com/design/DAEfu2_vnQ0/NovuiW_zz_us5ucq2La04w/view?utm_content=DAEfu2_vnQ0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 20
    },
=======
      image: "RedWines.png",
      price: 20},  
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'White Wines',
      type: 'drink',
      description: `Domestic and imported white wines on rotation. Ask our sommelier about the nightly white pairings!`,
<<<<<<< HEAD
      image: `https://www.canva.com/design/DAEfu7o0QRY/jOzwg9W89pQK8mIu19aTIQ/view?utm_content=DAEfu7o0QRY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 20
    },
=======
      image: "WhiteWines.png",
      price: 20},  
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Bruschetta',
      type: 'app',
<<<<<<< HEAD
      description:
        'Housemade bread brushed with garlic-infused olive oil, a pinch of salt, and topped with garden fresh tomatoes, onion, and herbs.',
      image: `https://www.canva.com/design/DAEfu4N-gUM/arhIIHs33mXY3O1ppCgUpA/view?utm_content=DAEfu4N-gUM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 12
    },
=======
      description: 'Housemade bread brushed with garlic-infused olive oil, a pinch of salt, and topped with garden fresh tomatoes, onion, and herbs.',
      image: "Bruschetta.png",
      price: 12},
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Charcuterie Board',
      type: 'app',
<<<<<<< HEAD
      description:
        'A balanced selection of the finest cheeses and house-cured meats.',
      image: `https://www.canva.com/design/DAEfvF6pn38/xzqpTc718ZTvEWqI7uI4Ug/view?utm_content=DAEfvF6pn38&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 15
    },

    {
      name: `Chef's Antipasto`,
      type: 'app',
      description: `Ask your server about Chef's Antipasto Special for this evening!`,
      image: `https://www.canva.com/design/DAEfvF3h-tY/2K9Rl5r-h-869uloMFq6-A/view?utm_content=DAEfvF3h-tY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 12
    },
=======
      description: 'A balanced selection of the finest cheeses and house-cured meats.',
      image: "CharcuterieBoard.png",
      price: 15},
    
    { name: `Chef's Antipasto`,
      type: 'app',
      description: `Ask your server about Chef's Antipasto Special for this evening!`,
      image: "antipasto.png",
      price: 12},
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Carne di Manzo',
      type: 'dinner',
<<<<<<< HEAD
      description:
        'Dry-aged, Delmonico steak: served with seasonal vegetables and your choice of risotto, gemelli, gnocchi or potato cakes.',
      image: `https://www.canva.com/design/DAEfvFIGzCI/kjAVegv70okULTZUjodhMw/view?utm_content=DAEfvFIGzCI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 75
    },
=======
      description: 'Dry-aged, Delmonico steak: served with seasonal vegetables and your choice of risotto, gemelli, gnocchi or potato cakes.',
      image: "Delmonico.png",
      price: 75},
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Carne di Maiale',
      type: 'dinner',
<<<<<<< HEAD
      description:
        'Farm-to-table, double cut porkchop: served with seasonal vegetables and your choice of risotto, gemelli, gnocchi or potato cakes.',
      image: `https://www.canva.com/design/DAEfvLrurgw/VE7N18SGxQYJ4AsBvnQEBQ/view?utm_content=DAEfvLrurgw&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 55
    },
=======
      description: 'Farm-to-table, double cut porkchop: served with seasonal vegetables and your choice of risotto, gemelli, gnocchi or potato cakes.',
      image: "doubleCutPorkChop.png",
      price: 55},
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Pollo Grigliato',
      type: 'dinner',
<<<<<<< HEAD
      description:
        'Ethically raised and killed, free-range chicken: served with seasonal vegetables and your choice of risotto, pappardelle, gemelli, or potato cakes.',
      image: `https://www.canva.com/design/DAEfvN6XLrM/cL_Pf9WjX_tgKpe5-QUY1g/view?utm_content=DAEfvN6XLrM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 45
    },

    {
      name: 'Pesce Alla Griglia',
      type: 'dinner',
      description:
        'Market fish special: served with seasonal vegetables and your choice of risotto, pappardelle, gemelli, or potato cakes.',
      image: `https://www.canva.com/design/DAEfvN-jUIY/osne4W2u4deiWV3NnIdDUw/view?utm_content=DAEfvN-jUIY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 65
    },
=======
      description: 'Ethically raised and killed, free-range chicken: served with seasonal vegetables and your choice of risotto, pappardelle, gemelli, or potato cakes.',
      image: "chicken.png",
      price: 45},
    
    { name: 'Pesce Alla Griglia',
      type: 'dinner',
      description: 'Market fish special: served with seasonal vegetables and your choice of risotto, pappardelle, gemelli, or potato cakes.',
      image: "fish.png",
      price: 65},  
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Gelato',
      type: 'dessert',
      description: `There's always room for gelato! Ask your server about our rotating, locally-sourceditali gelato specials.`,
<<<<<<< HEAD
      image: `https://www.canva.com/design/DAEfvJNs7B8/k_Z41ZdtlSKWNjTwCyKdMg/view?utm_content=DAEfvJNs7B8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 12
    },
=======
      image: "gelato.png",
      price: 12},
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Flower Pot Semifreddo',
      type: 'dessert',
<<<<<<< HEAD
      description:
        'Enjoy our Flower Pot Semifreddo, hand-crafted by our in-house pasticciere. This colorful dish is designed to look just like a spilled flower pot, however, every piece of this semifreddo is ediable... even the flower on top!',
      image: `https://www.canva.com/design/DAEfvLQFssI/SrmX8B7ue6q8bT1VRj1sBg/view?utm_content=DAEfvLQFssI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 15
    },
=======
      description: 'Enjoy our Flower Pot Semifreddo, hand-crafted by our in-house pasticciere. This colorful dish is designed to look just like a spilled flower pot, however, every piece of this semifreddo is ediable... even the flower on top!',
      image: "flowerPot.png",
      price: 15},
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

    {
      name: 'Tiramisu',
      type: 'dessert',
      description: `Made with Disaronno and our house-roasted espresso beans, this rich dessert is the perfect end to any meal.`,
<<<<<<< HEAD
      image: `https://www.canva.com/design/DAEfvAgRNJk/_BZMoVWTcC_YFw1S712NKw/view?utm_content=DAEfvAgRNJk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton`,
      price: 13
    }
  ]
=======
      image: "tiramisu.png",
      price: 13}      
]
>>>>>>> d02f6ff98af4e9ea6cdbc7d5442fae16393ad54f

  await MenuItem.insertMany(menuitems)
  console.log('Added some menu items!')
}
const run = async () => {
  await main()
  console.log('database about to close')
  db.close()
}

run()
