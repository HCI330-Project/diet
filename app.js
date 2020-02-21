var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");

});

app.get("/bye", function(req, res){
    res.send("goodbyw");

});


// Must stay on bottom
app.get("*", function(req, res){
    res.send("404 ERROR");

});

app.listen(3000, function(){
    console.log("Serving app on port 3000")
})