var mongoose = require('mongoose');
var Food = require('./models/food');

var data = [{
    name: 'Canned Tuna',
    quant: 1,
    unit: '',
    calories: 131,
    proteins: 6,
    carbs: 3,
    fat: 10,
    img: 'tuna.svg'
  },
  {
    name: 'Ground Beef (98/2)',
    quant: 0.33,
    unit: 'oz',
    calories: 106,
    proteins: 21,
    carbs: 0,
    fat: 2,
    img: 'groundbeef.svg'
  },
  {
    name: 'Ground Turkey',
    quant: 4.4,
    unit: 'oz',
    calories: 130,
    proteins: 20,
    carbs: 0,
    fat: 6,
    img: 'groundbeef.svg'
  },
  {
    name: 'Chicken Thigh',
    quant: 1,
    unit: 'pc',
    calories: 160,
    proteins: 24,
    carbs: 0,
    fat: 7,
    img: 'chickenthigh.svg'
  },
  {
    name: 'Chicken Breast',
    quant: 1,
    unit: 'pc',
    calories: 130,
    proteins: 28,
    carbs: 0,
    fat: 2.5,
    img: 'steak.svg'
  },
  {
    name: 'Canned Tuna',
    quant: 1,
    unit: '',
    calories: 120,
    proteins: 30,
    carbs: 0,
    fat: 1,
    img: 'tuna.svg'
  },
  {
    name: 'Beef Sirloin',
    quant: 1,
    unit: 'pc',
    calories: 210,
    proteins: 23,
    carbs: 0,
    fat: 12,
    img: 'steak1.svg'
  },
  {
    name: 'Pork Tenderloin',
    quant: 1,
    unit: 'pc',
    calories: 185,
    proteins: 32,
    carbs: 0,
    fat: 5.4,
    img: 'porktenderloin.svg'
  },
  {
    name: 'Top Sirloin',
    quant: 1,
    unit: 'pc',
    calories: 180,
    proteins: 30,
    carbs: 0,
    fat: 8.2,
    img: 'steak2.svg'
  },
  {
    name: 'Egg',
    quant: 1,
    unit: 'regular sized',
    calories: 70,
    proteins: 5,
    carbs: 0,
    fat: 4,
    img: 'egg.svg'
  },
  {
    name: 'Greek Yogurt',
    quant: 1,
    unit: 'cup',
    calories: 150,
    proteins: 5,
    carbs: 5,
    fat: 12,
    img: 'yogurt.svg' //HERE
  },
  {
    name: 'Kashi GoLean w/ Milk',
    quant: 1,
    unit: 'cup',
    calories: 180 + 40,
    proteins: 12 + 14,
    carbs: 40 + 1,
    fat: 2 + 9,
    img: 'cereal.svg'
  },
  {
    name: 'Protein Shake',
    quant: 1,
    unit: 'bottle',
    calories: 160,
    proteins: 30,
    carbs: 5,
    fat: 3,
    img: 'protein.svg'
  },
  {
    name: 'Tofu',
    quant: 1,
    unit: 'pc',
    calories: 70,
    proteins: 8,
    carbs: 1,
    fat: 4,
    img: 'tofu.svg'
  },
  // {
  //   name: "Skim Milk",
  //   quant: 4,
  //   calories: 40,
  //   proteins: 4,
  //   carbs: 6,
  //   fat: 0
  // },
  {
    name: 'Cottage Cheese',
    quant: 3.5,
    unit: 'oz',
    calories: 140,
    proteins: 14,
    carbs: 1,
    fat: 9,
    img: 'cottagecheese.svg'
  },
  {
    name: 'White Rice',
    quant: 1,
    unit: 'cup',
    calories: 250,
    proteins: 5,
    carbs: 0,
    fat: 4,
    img: 'rice.svg'
  },
  {
    name: 'Corn Tortilla',
    quant: 1,
    unit: 'pc',
    calories: 45,
    proteins: 1,
    carbs: 11,
    fat: 0,
    img: 'bread.svg'
  },
  {
    name: 'Russett Potato',
    quant: 1,
    unit: '',
    calories: 110,
    proteins: 3,
    carbs: 26,
    fat: 0,
    img: 'potato.svg'
  },
  {
    name: 'Oatmeal',
    quant: 1,
    unit: 'cup',
    calories: 130,
    proteins: 5,
    carbs: 23,
    fat: 2,
    img: 'oatmeal.svg'
  },
  {
    name: 'Grits',
    quant: 1,
    unit: 'bowl',
    calories: 130,
    proteins: 3,
    carbs: 29,
    fat: 0,
    img: 'oatmeal.svg'
  },
  {
    name: 'Sweet Potato',
    quant: 1,
    unit: '',
    calories: 54,
    proteins: 1,
    carbs: 12,
    fat: 0,
    img: 'potato.svg'
  },
  {
    name: 'Pasta',
    quant: 2,
    unit: 'oz',
    calories: 200,
    proteins: 7,
    carbs: 42,
    fat: 1,
    img: 'pasta.svg'
  },
  {
    name: 'Whole Wheat Bread',
    quant: 1,
    unit: 'slice',
    calories: 69,
    proteins: 2,
    carbs: 13,
    fat: 1,
    img: 'bread.svg'
  },
  {
    name: 'Quinoa',
    quant: 1,
    unit: 'bowl',
    calories: 374,
    proteins: 13,
    carbs: 68,
    fat: 5,
    img: 'rice.svg'
  },
  {
    name: 'Kidney Beans',
    quant: 1,
    unit: 'cup',
    calories: 225,
    proteins: 15,
    carbs: 40,
    fat: 1,
    img: 'beans.svg'
  },
  {
    name: 'Apple',
    quant: 1,
    unit: '',
    calories: 94,
    proteins: 0,
    carbs: 25,
    fat: 0,
    img: 'apple.svg'
  },
  {
    name: 'Banana',
    quant: 1,
    unit: '',
    calories: 120,
    proteins: 1,
    carbs: 22,
    fat: 0,
    img: 'banana.svg'
  },
  {
    name: 'Almond Butter',
    quant: 0.5,
    unit: 'oz',
    calories: 180,
    proteins: 3,
    carbs: 2,
    fat: 12,
    img: 'almondbutter.svg'
  },
  {
    name: 'Peanut Butter',
    quant: 2,
    unit: 'tbsp',
    calories: 200,
    proteins: 8,
    carbs: 7,
    fat: 16,
    img: 'peanutbutter.svg'
  },
  {
    name: 'Olive Oil',
    quant: 1,
    unit: 'tbsp',
    calories: 120,
    proteins: 0,
    carbs: 0,
    fat: 14,
    img: 'oil.svg'
  },
  {
    name: 'Coconut Oil',
    quant: 1,
    unit: 'tbsp',
    calories: 120,
    proteins: 0,
    carbs: 0,
    fat: 14,
    img: 'oil.svg'
  },
  {
    name: 'Avocado',
    quant: 1,
    unit: '',
    calories: 232,
    proteins: 3,
    carbs: 12,
    fat: 21,
    img: 'avocado.svg'
  },
  {
    name: 'Almonds',
    quant: 1,
    unit: 'handful',
    calories: 76,
    proteins: 2,
    carbs: 2,
    fat: 6,
    img: 'almonds.svg'
  },
  {
    name: 'Cashews',
    quant: 1,
    unit: 'handful',
    calories: 170,
    proteins: 5,
    carbs: 8,
    fat: 14,
    img: 'cashews.svg'
  }
];

function seedDB() {
  Food.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('food removed');
    data.forEach(function(seed) {
      Food.create(seed, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log('added a food item');
        }
      });
    });
  });
}

module.exports = seedDB;