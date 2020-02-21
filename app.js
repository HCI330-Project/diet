var express = require("express");
var app = express();
const router = express.Router();

app.use(express.static("public"));
app.use("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");

});

app.get("/sign-in", function(req, res) {
  res.render("sign-in");

});

app.get("/bye", function(req, res) {
  res.send("goodbye");

});


// Must stay on bottom
app.get("*", function(req, res) {
  res.send("404 ERROR");

});
module.exports = router ;
app.listen(3000, function() {
  console.log("Serving app on port 3000")
})
