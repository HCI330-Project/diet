var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    weight: Number,
    // genderIsMale: bool,
    genderIsMale: {
      type: Boolean,
      default: false
    },
    multiple: Number,
    gainMuscleIsTrue: {
      type: Boolean,
      default: false
    }

});


UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
