var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/swole");

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home.ejs");

});

app.get("/profile", function(req, res) {
  res.render("profile.ejs");

});

app.get("/sign-in", function(req, res) {
  res.render("sign-in.ejs");
});

app.get("/bye", function(req, res) {
  res.send("goodbye");
});


// Must stay on bottom
app.get("*", function(req, res) {
  res.send("404 ERROR");
});

app.listen(3000, function() {
  console.log("Serving app on port 3000")
});
