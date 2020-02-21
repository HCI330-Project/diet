var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs");

});

app.get("/bye", function(req, res){
    res.send("goodbye");

});


// Must stay on bottom
app.get("*", function(req, res){
    res.send("404 ERROR");

});

app.listen(3000, function(){
    console.log("Serving app on port 3000")
})
