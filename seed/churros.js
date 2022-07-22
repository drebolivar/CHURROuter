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
      available: 'yes',
      img: 'https://i.imgur.com/yFlr9vq.jpg'
    },
    {
      type: 'Berries and Cream',
      dip: 'Fluffy Vanilla',
      price: '$6.75',
      location: 'Hungry Bear Restauraunt',
      description:
        'Berries and Cream..Berries and Cream...Im a little lad who loves Berries and Cream',
      available: 'yes',
      img: 'https://i.imgur.com/UrUj4am.jpg'
    },
    {
      type: 'Green Apple',
      dip: 'Caramel',
      price: '$ 6.75',
      location: 'Tomorrowland',
      description: 'Green apple flavored sugar paired with caramel sauce.',
      available: 'yes',
      img: 'https://i.imgur.com/6e4IFd0.jpg'
    },
    {
      type: 'Blueberry Looks Good on You',
      dip: 'Blueberry Cheesecake',
      price: '$6.75',
      location: 'Sleeping Beauty Castle',
      description:
        'Blueberry-flavored sugar-dusted churro that is paired with a dip made of blueberry fruit topping and cream cheese icing.',
      available: 'yes',
      img: 'https://i.imgur.com/mbGjKhK.jpg'
    },
    {
      type: 'Caliente',
      dip: 'NA',
      price: '5.75',
      location: 'Senor Buzz Churros',
      description: 'Churros covered in cinnamon, reminscent of Red Hots candy.',
      available: 'yes',
      img: 'https://i.imgur.com/ycO8qtW.jpg'
    },
    {
      type: 'Cinnamon Super Galaxy',
      dip: 'NA',
      price: '$5.75',
      location: 'Senor Buzz Churros',
      description: 'Churro with extra space dust',
      available: 'yes',
      img: 'https://i.imgur.com/opsE6oj.jpg'
    },
    {
      type: 'Mango',
      dip: 'NA',
      price: '$6.25',
      location: 'Willies Churros',
      description:
        'Tamarind chamoy and mango chunks covered in chili-lime sugar and mango sauce.',
      available: 'yes',
      img: 'https://i.imgur.com/sc3gwhD.jpg'
    },
    {
      type: 'Smores',
      dip: 'NA',
      price: '6.75',
      location: 'Redwood Creek Challenge Trail',
      description:
        'Covered in crushed graham crackers and is served with a gooey marshmallow and chocolate dipping sauce.',
      available: 'yes',
      img: 'https://i.imgur.com/4KxoNdj.jpg'
    },
    {
      type: 'Pineapple Tres Leches Churro',
      dip: 'Pineapple Tres Leches',
      price: '$6.75',
      location: 'Schmoozies',
      description: 'Classic churro with a pineapple tres leches dipping sauce.',
      available: 'yes',
      img: 'https://i.imgur.com/v1tJKkC.jpg'
    },
    {
      type: 'Power Stone',
      dip: 'NA',
      price: '$5.75',
      location: 'Hollywood Lounge',
      description:
        'Covered in blackberry-flavored sugar, icing, and purple rock candy.',
      available: 'no',
      img: 'https://i.imgur.com/AXRqO6U.jpg'
    },
    {
      type: 'Maple Bacon',
      dip: 'NA',
      price: '$5.75',
      location: 'Redwood Creek Challenge Trail',
      description: 'Maple icing with crumbled bacon.',
      available: 'no',
      img: 'https://i.imgur.com/QAkT4Ny.jpg'
    },
    {
      type: 'Fluffernutter',
      dip: 'NA',
      price: '$6.75',
      location: 'Willies Churros',
      description:
        'Topped with peanut butter sauce, marshmallow sauce, and chocolate chips.',
      available: 'no',
      img: 'https://i.imgur.com/mubGHYQ.jpg'
    },
    {
      type: 'Pecan Pie',
      dip: 'NA',
      price: '$6.25',
      location: 'Willies Churros',
      description:
        'classic churro smothered in maple glaze, toasted pecans, and chocolate drizzle',
      available: 'no',
      img: 'https://i.imgur.com/cyYeuNo.jpg'
    },
    {
      type: 'Sleeping Beauty',
      dip: 'NA',
      price: '$ 5.75',
      location: 'Sleeping Beauty Castle',
      description:
        'Pink cherry and blue raspberry churros, for promotion of Magic Happens Parade',
      available: 'no',
      img: 'https://i.imgur.com/UxkPELP.jpg'
    },
    {
      type: 'Candy Corn',
      dip: 'Candy Corn Sauce',
      price: '$6.75',
      location: 'NA',
      description: 'Orange sugar churros with candy corn sauce',
      available: 'no',
      img: 'https://i.imgur.com/bRwumWf.jpg'
    },
    {
      type: 'Horchata',
      dip: 'Condensed Milk',
      price: '$6.25',
      location: 'Goofys Sky School',
      description:
        'Cinnamon and nutmeg sugar with a condensed milk dipping sauce',
      available: 'no',
      img: 'https://i.imgur.com/uQmtwjp.jpg'
    },
    {
      type: 'Milk and Cookies',
      dip: 'Cookies and Cream',
      price: '$6.25',
      location: 'Hollywood Lounge',
      description:
        'Rolled in chocolate chip cookie , cookies and cream sugar, and cream dipping sauce.',
      available: 'no',
      img: 'https://i.imgur.com/F4cpDHs.jpg'
    },
    {
      type: 'Sugar Cookie',
      dip: 'NA',
      price: '$5.75',
      location: 'Cozy Cone Motel',
      description: 'Covered in icing and holiday sprinkles.',
      available: 'no',
      img: 'https://i.imgur.com/QMzGqqh.jpg'
    },
    {
      type: 'Turtle',
      dip: 'Caramel Pacan',
      price: '$6.25',
      location: 'Fronteir Land',
      description:
        'Dusted with dark chocolate sugar, drizzled with condensed milk, and served with caramel pecan dipping sauce',
      available: 'no',
      img: 'https://i.imgur.com/ACkIyFv.jpg'
    },
    {
      type: 'Peppermint',
      dip: 'Chocolate',
      price: '$6.25',
      location: 'Reedwood Creek Trail',
      description:
        'Smothered in crushed peppermint, chocolate sauce, and vanilla icing.',
      available: 'no',
      img: 'https://i.imgur.com/x1Mv9Nv.jpg'
    },
    {
      type: 'Toffee',
      dip: 'Chocolate Almond',
      price: '$6.75',
      location: 'Tomorrowland',
      description: 'Toffee sugar with chocolate almond dipping sauce.',
      available: 'no',
      img: 'https://i.imgur.com/lmM581K.jpg'
    },
    {
      type: 'Caramel and Coconut',
      dip: 'Caramel Coconut',
      price: '$6.75',
      location: 'Sleeping Beauty Castle',
      description: 'Covered in coconut flakes with a caramel coconut dip.',
      available: 'no',
      img: 'https://i.imgur.com/UxmbGi0.jpg'
    },
    {
      type: 'Sugar Plum',
      dip: 'N/A',
      price: '$5.25',
      location: 'New Orleans Square',
      description: 'Churro with a generous amount of purple sugar.',
      available: 'no',
      img: 'https://i.imgur.com/nD4hEgX.jpg'
    },
    {
      type: 'Banana Foster',
      dip: 'Banana Carmel Sauce',
      price: '$6.25',
      location: 'Cozy Cone Motel',
      description:
        'Dusted in cinammon-banana sugar with a banana-infused caramel sauce',
      available: 'no',
      img: 'https://i.imgur.com/GozZmZ9.jpg'
    },
    {
      type: 'Yellow Marshmallow',
      dip: 'Marshmallow',
      price: '$6.75',
      location: 'Tomorrowland',
      description:
        'Yellow marshmallow flavored with marshmallow dipping sauce.',
      available: 'no',
      img: 'https://i.imgur.com/NZWtU4Q.jpg'
    },
    {
      type: 'Sour Cherry',
      dip: 'Cream Cheese',
      price: '$6.75',
      location: 'Tomorrowland',
      description:
        'Valentines Day special complete with sour sugar and cream cheese frosting dip',
      available: 'no',
      img: 'https://i.imgur.com/dcR7ohH.jpg'
    },
    {
      type: 'Strawberry Sugar',
      dip: 'NA',
      price: '$5.25',
      location: 'New Orleans Square',
      description: 'Traditional Churro rolled in strawberry sugar,',
      available: 'no',
      img: 'https://i.imgur.com/fETX0a0.jpg'
    },
    {
      type: 'Oreo',
      dip: 'Oreo Frosting',
      price: '$6.50',
      location: 'California Churro',
      description: 'Rolled in Oreo crumbs and topped with a cream drizzle.',
      available: 'yes',
      img: 'https://i.imgur.com/a11FOom.jpg'
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
