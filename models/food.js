var mongoose = require("mongoose");

var foodSchema = new mongoose.Schema({
  name: String,
  quant: Number,
  unit: String,
  calories: Number,
  proteins: Number,
  carbs: Number,
  fat: Number,
  img: String
});

module.exports = mongoose.model("Food", foodSchema);