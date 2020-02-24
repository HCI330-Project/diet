var mongoose = require("mongoose");
var Food = require("./models/food")

var data = [
    {
      name: "Chicken Breast",
      ounces: 1,
      calories: 150,
      proteins: 12,
      carbs: 0,
      fat: 1
    },
    {
      name: "White Rice",
      ounces: 3,
      calories: 250,
      proteins: 1,
      carbs: 30,
      fat: 1
    },
    {
      name: "Almond Butter",
      ounces: 0.5,
      calories: 180,
      proteins: 3,
      carbs: 2,
      fat: 12
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



}

module.exports = seedDB;
