var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

var app = express();
mongoose.connect("mongodb://localhost/swole");
app.use(require("express-session")({
    secret:"Kiki is the cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.use(User.UserSchema());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =============
// ROUTES
// =============
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


// Auth Routes
app.get("/register", function(req,res){
  res.render("register.ejs");
});

app.post("/register", function(req, res){
  // res.send("register post route")
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
          console.log(err);
          return res.render('register.ejs');
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/register");
        });
    });
});

// Must stay on bottom
app.get("*", function(req, res) {
  res.send("404 ERROR");
});

app.listen(3000, function() {
  console.log("Serving app on port 3000")
});
