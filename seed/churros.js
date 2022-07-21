const db = require('../db')
const Churro = require('../models/churro')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const churros = [
    {
      type: 'Plain',
      dip: 'N/A',
      price: '$5.00',
      location: 'Hungry Bear Restauraunt',
      description: 'Traditional Churro',
      available: 'yes'
    },
    {
      type: 'Berries and Cream',
      dip: 'Fluffy Vanilla',
      price: '$6.75',
      location: 'Hungry Bear Restauraunt',
      description:
        'Berries and Cream..Berries and Cream...Im a young lad who loves Berries and Cream',
      available: 'yes'
    },
    {
      type: 'Green Apple',
      dip: 'Caramel',
      price: '$ 6.75',
      location: 'Tomorrowland',
      description: 'Green apple flavored sugar paired with caramel sauce.',
      available: 'yes'
    },
    {
      type: 'Blueberry Looks Good on You',
      dip: 'Blueberry Cheesecake',
      price: '$6.75',
      location: 'Sleeping Beauty Castle',
      description:
        'Blueberry-flavored sugar-dusted churro that is paired with a dip made of blueberry fruit topping and cream cheese icing.',
      available: 'yes'
    },
    {
      type: 'Caliente',
      dip: 'NA',
      price: '5.75',
      location: 'Senor Buzz Churros',
      description: 'Churros covered in cinnamon, reminscent of Red Hots candy.',
      available: 'yes'
    },
    {
      type: 'Cinnamon Super Galaxy',
      dip: 'NA',
      price: '$5.75',
      location: 'Senor Buzz Churros',
      description: 'Churro with extra space dust',
      available: 'yes'
    },
    {
      type: 'Mango',
      dip: 'NA',
      price: '$6.25',
      location: 'Willies Churros',
      description:
        'Tamarind chamoy and mango chunks covered in chili-lime sugar and mango sauce.',
      available: 'yes'
    },
    {
      type: 'Smores',
      dip: 'NA',
      price: '6.75',
      location: 'Redwood Creek Challenge Trail',
      description:
        'Covered in crushed graham crackers and is served with a gooey marshmallow and chocolate dipping sauce.',
      available: 'yes'
    },
    {
      type: 'Pineapple Tres Leches Churro',
      dip: 'Pineapple Tres Leches',
      price: '$6.75',
      location: 'Schmoozies',
      description: 'Classic churro with a pineapple tres leches dipping sauce.',
      available: 'yes'
    },
    {
      type: 'Rose Gold',
      dip: 'NA',
      price: 'NA',
      location: 'NA',
      description: 'NA',
      available: 'no'
    },
    {
      type: 'Power Stone',
      dip: 'NA',
      price: '$5.75',
      location: 'Hollywood Lounge',
      description:
        'Covered in blackberry-flavored sugar, icing, and purple rock candy.',
      available: 'no'
    },
    {
      type: 'Maple Bacon',
      dip: 'NA',
      price: '$5.75',
      location: 'Redwood Creek Challenge Trail',
      description: 'Maple icing with crumbled bacon.',
      available: 'no'
    },
    {
      type: 'Fluffernutter',
      dip: 'NA',
      price: '$6.75',
      location: 'Willies Churros',
      description:
        'Topped with peanut butter sauce, marshmallow sauce, and chocolate chips.',
      available: 'no'
    },
    {
      type: 'Pecan Pie',
      dip: 'NA',
      price: '$6.25',
      location: 'Willies Churros',
      description:
        'classic churro smothered in maple glaze, toasted pecans, and chocolate drizzle',
      available: 'no'
    },
    {
      type: 'Sleeping Beauty',
      dip: 'NA',
      price: '$ 5.75',
      location: 'Sleeping Beauty Castle',
      description:
        'Pink cherry and blue raspberry churros, for promotion of Magic Happens Parade',
      available: 'no'
    },
    {
      type: 'Candy Corn',
      dip: 'Candy Corn Sauce',
      price: 'NA',
      location: 'NA',
      description: 'Orange sugar churros with candy corn sauce',
      available: 'no'
    },
    {
      type: 'Lightsabers',
      dip: 'NA',
      price: 'NA',
      location: 'NA',
      description:
        'Blue and red colored churros, reminiscent of the iconic lightsabers from Star Wars',
      available: 'no'
    },
    {
      type: 'Horchata',
      dip: 'Condensed Milk',
      price: '$6.25',
      location: 'Goofys Sky School',
      description:
        'Cinnamon and nutmeg sugar with a condensed milk dipping sauce',
      available: 'no'
    },
    {
      type: 'Milk and Cookies',
      dip: 'Cookies and Cream',
      price: '$6.25',
      location: 'Hollywood Lounge',
      description:
        'Rolled in chocolate chip cookie , cookies and cream sugar, and cream dipping sauce.',
      available: 'no'
    },
    {
      type: 'Sugar Cookie',
      dip: 'NA',
      price: '$5.75',
      location: 'Cozy Cone Motel',
      description: 'Covered in icing and holiday sprinkles.',
      available: 'no'
    },
    {
      type: 'Turtle',
      dip: 'Caramel Pacan',
      price: '$6.25',
      location: 'Fronteir Land',
      description:
        'Dusted with dark chocolate sugar, drizzled with condensed milk, and served with caramel pecan dipping sauce',
      available: 'no'
    },
    {
      type: 'Peppermint',
      dip: 'Chocolate',
      price: '$6.25',
      location: 'Reedwood Creek Trail',
      description:
        'Smothered in crushed peppermint, chocolate sauce, and vanilla icing.',
      available: 'no'
    },
    {
      type: 'Toffee',
      dip: 'Chocolate Almond',
      price: '$6.75',
      location: 'Tomorrowland',
      description: 'Toffee sugar with chocolate almond dipping sauce.',
      available: 'no'
    },
    {
      type: 'Caramel and Coconut',
      dip: 'Caramel Coconut',
      price: '$6.75',
      location: 'Sleeping Beauty Castle',
      description: 'Covered in coconut flakes with a caramel coconut dip.',
      available: 'no'
    },
    {
      type: 'Sugar Plum',
      dip: 'N/A',
      price: '$5.25',
      location: 'New Orleans Square',
      description: 'Churro with a generous amount of purple sugar.',
      available: 'no'
    },
    {
      type: 'Banana Foster',
      dip: 'Banana Carmel Sauce',
      price: '$6.25',
      location: 'Cozy Cone Motel',
      description:
        'Dusted in cinammon-banana sugar with a banana-infused caramel sauce',
      available: 'no'
    },
    {
      type: 'Yellow Marshmallow',
      dip: 'Marshmallow',
      price: '$6.75',
      location: 'Tomorrowland',
      description:
        'Yellow marshmallow flavored with marshmallow dipping sauce.',
      available: 'no'
    },
    {
      type: 'Sour Cherry',
      dip: 'Cream Cheese',
      price: '$6.75',
      location: 'Tomorrowland',
      description:
        'Valentines Day special complete with sour sugar and cream cheese frosting dip',
      available: 'no'
    },
    {
      type: 'Caramel Corn',
      dip: 'NA',
      price: 'NA',
      location: 'Willies Churros',
      description:
        'Rolled in corn cereal sugar, caramel drizzle, and caramel corn.',
      available: 'yes'
    },
    {
      type: 'Strawberry Sugar',
      dip: 'NA',
      price: 'NA',
      location: 'New Orleans Square',
      description: 'Traditional Churro rolled in strawberry sugar,',
      available: 'no'
    },
    {
      type: 'Oreo',
      dip: 'NA',
      price: 'NA',
      location: 'California Churro',
      description: 'Rolled in Oreo crumbs and topped with a cream drizzle.',
      available: 'yes'
    }
  ]

  await Churro.insertMany(churros)
  console.log('Created Churros!')
}
const run = async () => {
  await main()
  db.close()
}

run()
