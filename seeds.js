var mongoose = require("mongoose");
var Food = require("./models/food")

<<<<<<< HEAD
var data = [{
		name: 'Canned Tuna',
		ounces: 0.33,
		calories: 131,
		proteins: 6,
		carbs: 3,
		fat: 10,
		img: 'tuna.svg'

	},
	{
		name: 'Ground Beef (98/2)',
		ounces: 0.33,
		calories: 106,
		proteins: 21,
		carbs: 0,
		fat: 2,
		img: 'groundbeef.svg'
	},
	{
		name: 'Ground Turkey',
		ounces: 4.4,
		calories: 130,
		proteins: 20,
		carbs: 0,
		fat: 6,
		img: 'groundbeef.svg'
	},
	{
		name: 'Chicken Thigh',
		ounces: 4,
		calories: 160,
		proteins: 24,
		carbs: 0,
		fat: 7,
		img: 'chickenthigh.svg'
	},
	{
		name: 'Chicken Breast',
		ounces: 4,
		calories: 130,
		proteins: 28,
		carbs: 0,
		fat: 2.5,
		img: 'steak.svg'
	},
	{
		name: 'Canned Tuna',
		ounces: 4,
		calories: 120,
		proteins: 30,
		carbs: 0,
		fat: 1,
		img: 'tuna.svg'
	},
	{
		name: 'Beef Sirloin',
		ounces: 4,
		calories: 210,
		proteins: 23,
		carbs: 0,
		fat: 12,
		img: 'steak1.svg'
	},
	{
		name: 'Pork Tenderloin',
		ounces: 4,
		calories: 185,
		proteins: 32,
		carbs: 0,
		fat: 5.4,
		img: 'porktenderloin.svg'
	},
	{
		name: 'Top Sirloin',
		ounces: 4,
		calories: 180,
		proteins: 30,
		carbs: 0,
		fat: 8.2,
		img: 'steak2.svg'
	},
	{
		name: 'Egg',
		ounces: 1.7,
		calories: 70,
		proteins: 5,
		carbs: 0,
		fat: 4,
		img: 'egg.svg'
	},
	{
		name: 'Greek Yogurt',
		ounces: 3.1,
		calories: 150,
		proteins: 5,
		carbs: 5,
		fat: 12,
		img: 'yogurt.svg' //HERE
	},
	{
		name: 'Kashi GoLean w/ Milk',
		ounces: 1.9,
		calories: 180 + 40,
		proteins: 12 + 14,
		carbs: 40 + 1,
		fat: 2 + 9,
		img: 'cereal.svg'
	},
	{
		name: 'Protein Shake',
		ounces: 11,
		calories: 160,
		proteins: 30,
		carbs: 5,
		fat: 3,
		img: 'protein.svg'
	},
	{
		name: 'Tofu',
		ounces: 3,
		calories: 70,
		proteins: 8,
		carbs: 1,
		fat: 4,
		img: 'tofu.svg'
	},
	// {
	//   name: "Skim Milk",
	//   ounces: 4,
	//   calories: 40,
	//   proteins: 4,
	//   carbs: 6,
	//   fat: 0
	// },
	{
		name: 'Cottage Cheese',
		ounces: 3.5,
		calories: 140,
		proteins: 14,
		carbs: 1,
		fat: 9,
		img: 'cottagecheese.svg'
	},
	{
		name: 'White Rice',
		ounces: 3,
		calories: 250,
		proteins: 5,
		carbs: 0,
		fat: 4,
		img: 'rice.svg'
	},
	{
		name: 'Corn Tortilla',
		ounces: 0.88,
		calories: 45,
		proteins: 1,
		carbs: 11,
		fat: 0,
		img: 'bread.svg'
	},
	{
		name: 'Russett Potato',
		ounces: 7.5,
		calories: 110,
		proteins: 3,
		carbs: 26,
		fat: 0,
		img: 'potato.svg'
	},
	{
		name: 'Oatmeal',
		ounces: 1.2,
		calories: 130,
		proteins: 5,
		carbs: 23,
		fat: 2,
		img: 'oatmeal.svg'
	},
	{
		name: 'Grits',
		ounces: 1.4,
		calories: 130,
		proteins: 3,
		carbs: 29,
		fat: 0,
		img: 'oatmeal.svg'
	},
	{
		name: 'Sweet Potato',
		ounces: 2.1,
		calories: 54,
		proteins: 1,
		carbs: 12,
		fat: 0,
		img: 'potato.svg'
	},
	{
		name: 'Pasta',
		ounces: 2,
		calories: 200,
		proteins: 7,
		carbs: 42,
		fat: 1,
		img: 'pasta.svg'
	},
	{
		name: 'Whole Wheat Bread',
		ounces: 1,
		calories: 69,
		proteins: 2,
		carbs: 13,
		fat: 1,
		img: 'bread.svg'
	},
	{
		name: 'Quinoa',
		ounces: 3.5,
		calories: 374,
		proteins: 13,
		carbs: 68,
		fat: 5,
		img: 'rice.svg'
	},
	{
		name: 'Kidney Beans',
		ounces: 7.1,
		calories: 225,
		proteins: 15,
		carbs: 40,
		fat: 1,
		img: 'beans.svg'
	},
	{
		name: 'Apple',
		ounces: 6.4,
		calories: 94,
		proteins: 0,
		carbs: 25,
		fat: 0,
		img: 'apple.svg'
	},
	{
		name: 'Banana',
		ounces: 4.9,
		calories: 120,
		proteins: 1,
		carbs: 22,
		fat: 0,
		img: 'banana.svg'
	},
	{
		name: 'Almond Butter',
		ounces: 0.5,
		calories: 180,
		proteins: 3,
		carbs: 2,
		fat: 12,
		img: 'almondbutter.svg'
	},
	{
		name: 'Peanut Butter',
		ounces: 1.1,
		calories: 200,
		proteins: 8,
		carbs: 7,
		fat: 16,
		img: 'peanutbutter.svg'
	},
	{
		name: 'Olive Oil',
		ounces: 0.5,
		calories: 120,
		proteins: 0,
		carbs: 0,
		fat: 14,
		img: 'oil.svg'
	},
	{
		name: 'Coconut Oil',
		ounces: 0.5,
		calories: 120,
		proteins: 0,
		carbs: 0,
		fat: 14,
		img: 'oil.svg'
	},
	{
		name: 'Avocado',
		ounces: 5.3,
		calories: 232,
		proteins: 3,
		carbs: 12,
		fat: 21,
		img: 'avocado.svg'
	},
	{
		name: 'Almonds',
		ounces: 0.5,
		calories: 76,
		proteins: 2,
		carbs: 2,
		fat: 6,
		img: 'almonds.svg'
	},
	{
		name: 'Cashews',
		ounces: 1,
		calories: 170,
		proteins: 5,
		carbs: 8,
		fat: 14,
		img: 'cashews.svg'
	}
];

function seedDB() {
	Food.remove({}, function (err) {
		if (err) {
			console.log(err);
		}
		console.log('food removed');
		data.forEach(function (seed) {
			Food.create(seed, function (err, data) {
				if (err) {
					console.log(err);
				} else {
					console.log('added a food item');
				}
			});
		});
	});
=======
var data = [
    {
      name: "Canned Tuna",
      ounces: 0.33,
      calories: 131,
      proteins: 6,
      carbs: 3,
      fat: 10
    },
    {
      name: "Ground Beef 98% Lean",
      ounces: 0.33,
      calories: 106,
      proteins: 21,
      carbs: 0,
      fat: 2
    },
    {
      name: "Lean Ground Turkey",
      ounces: 4.4,
      calories: 130,
      proteins: 20,
      carbs: 0,
      fat: 6
    },
    {
      name: "Chicken Thigh, no skin nor bone",
      ounces: 4,
      calories: 160,
      proteins: 24,
      carbs: 0,
      fat: 7
    },
    {
      name: "Chicken Breast",
      ounces: 4,
      calories: 130,
      proteins: 28,
      carbs: 0,
      fat: 2.5
    },
    {
      name: "Canned Tuna",
      ounces: 4,
      calories: 120,
      proteins: 30,
      carbs: 0,
      fat: 1
    },
    {
      name: "Beef Sirloin",
      ounces: 4,
      calories: 210,
      proteins: 23,
      carbs: 0,
      fat: 12
    },
    {
      name: "Pork Tenderloin, lean only, roasted",
      ounces: 4,
      calories: 185,
      proteins: 32,
      carbs: 0,
      fat: 5.4
    },
    {
      name: "Top Sirloin",
      ounces: 4,
      calories: 180,
      proteins: 30,
      carbs: 0,
      fat: 8.2
    },
    {
      name: "Whole Medium Egg",
      ounces: 1.7,
      calories: 70,
      proteins: 5,
      carbs: 0,
      fat: 4
    },
    {
      name: "Plain Greek Yogurt",
      ounces: 3.1,
      calories: 150,
      proteins: 5,
      carbs: 5,
      fat: 12
    },
    {
      name: "Kashi GoLean Original Cereal + 1 Cup Skim Milk",
      ounces: 1.9,
      calories: 180 + 40,
      proteins: 12 + 14,
      carbs: 40 + 1,
      fat: 2 + 9
    },
    {
      name: "Premier Chocolate Protein Shake",
      ounces: 11,
      calories: 160,
      proteins: 30,
      carbs: 5,
      fat: 3
    },
    {
      name: "Tofu, firm",
      ounces: 3,
      calories: 70,
      proteins: 8,
      carbs: 1,
      fat: 4
    },
    // {
    //   name: "Skim Milk",
    //   ounces: 4,
    //   calories: 40,
    //   proteins: 4,
    //   carbs: 6,
    //   fat: 0
    // },
    {
      name: "Cottage Cheese",
      ounces: 3.5,
      calories: 140,
      proteins: 14,
      carbs: 1,
      fat: 9
    },
    {
      name: "White Rice",
      ounces: 3,
      calories: 250,
      proteins: 5,
      carbs: 0,
      fat: 4
    },
    {
      name: "Corn Tortilla",
      ounces: 0.88,
      calories: 45,
      proteins: 1,
      carbs: 11,
      fat: 0
    },
    {
      name: "Russett Potato",
      ounces: 7.5,
      calories: 110,
      proteins: 3,
      carbs: 26,
      fat: 0
    },
    {
      name: "Oatmeal, dry",
      ounces: 1.2,
      calories: 130,
      proteins: 5,
      carbs: 23,
      fat: 2
    },
    {
      name: "Grits, dry",
      ounces: 1.4,
      calories: 130,
      proteins: 3,
      carbs: 29,
      fat: 0
    },
    {
      name: "Sweet Potato",
      ounces: 2.1,
      calories: 54,
      proteins: 1,
      carbs: 12,
      fat: 0
    },
    {
      name: "Pasta, cooked",
      ounces: 2,
      calories: 200,
      proteins: 7,
      carbs: 42,
      fat: 1
    },
    {
      name: "Whole Wheat Bread",
      ounces: 1,
      calories: 69,
      proteins: 2,
      carbs: 13,
      fat: 1
    },
    {
      name: "Quinoa",
      ounces: 3.5,
      calories: 374,
      proteins: 13,
      carbs: 68,
      fat: 5
    },
    {
      name: "Red Kidney Beans",
      ounces: 7.1,
      calories: 225,
      proteins: 15,
      carbs: 40,
      fat: 1
    },
    {
      name: "Apple",
      ounces: 6.4,
      calories: 94,
      proteins: 0,
      carbs: 25,
      fat: 0
    },
    {
      name: "Banana",
      ounces: 4.9,
      calories: 120,
      proteins: 1,
      carbs: 22,
      fat: 0
    },
    {
      name: "Almond Butter",
      ounces: 0.5,
      calories: 180,
      proteins: 3,
      carbs: 2,
      fat: 12
    },
    {
      name: "Peanut Butter",
      ounces: 1.1,
      calories: 200,
      proteins: 8,
      carbs: 7,
      fat: 16
    },
    {
      name: "Olive Oil",
      ounces: 0.5,
      calories: 120,
      proteins: 0,
      carbs: 0,
      fat: 14
    },
    {
      name: "Coconut Oil",
      ounces: 0.5,
      calories: 120,
      proteins: 0,
      carbs: 0,
      fat: 14
    },
    {
      name: "Avocado",
      ounces: 5.3,
      calories: 232,
      proteins: 3,
      carbs: 12,
      fat: 21
    },
    {
      name: "Almonds",
      ounces: 0.5,
      calories: 76,
      proteins: 2,
      carbs: 2,
      fat: 6
    },
    {
      name: "Cashews",
      ounces: 1,
      calories: 170,
      proteins: 5,
      carbs: 8,
      fat: 14
    },
]
function seedDB(){
  Food.remove({}, function(err){
    if (err){
      console.log(err)
    }
    console.log("food removed");
    data.forEach(function(seed){
      Food.create(seed, function(err, data){
        if(err){
          console.log(err)
        } else {
          console.log("added a food item");
        }
      })
    });
  });



>>>>>>> master
}

module.exports = seedDB;