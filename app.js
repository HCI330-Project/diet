var express = require("express");
var app = express();
const router = express.Router();

app.use(express.static("public"));
app.use("view engine", "ejs");

router.get("/", function(req, res) {
  res.render("home");

});

router.get("/sign-in", function(req, res) {
  res.render("sign-in");

});

router.get("/bye", function(req, res) {
  res.send("goodbye");

});


// Must stay on bottom
router.get("*", function(req, res) {
  res.send("404 ERROR");

});
module.exports = router ;
app.listen(3000, function() {
  console.log("Serving app on port 3000")
})
