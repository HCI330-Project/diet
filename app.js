var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");


mongoose.connect("mongodb://localhost/swole");


var app = express();
app.set('view engine', 'ejs');

app.use(require("express-session")({
    secret: "very secret secret",
    resave: false,
    saveUninitialized: false
}));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =================
// ROUTES
// =================


app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

app.get("/profile", isLoggedIn, function(req, res){
    res.render("profile");
});


// =================
// AUTH ROUTES
// =================
app.get("/register", function(req, res){
    res.render("register");
});
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
      if(err){
        console.log(err);
        return res.render('register');
      }
      passport.authenticate("local")(req, res, function(){
        res.redirect("/profile");
      });
    });
});


//Login ROUTES
app.get("/login", function(req, res){
    res.render("login");
});


app.post("/login",passport.authenticate("local",{
    successRedirect: "/profile",
    failureRedirect: "/login"
}), function(req, res){

});


app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function() {
    console.log("Serving app on port 3000")
  });
