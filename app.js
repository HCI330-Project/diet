var express = require('express'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	bodyParser = require('body-parser'),
	User = require('./models/user'),
	Food = require('./models/food'),
	LocalStrategy = require('passport-local'),
	methodOverride = require('method-override'),
	passportLocalMongoose = require('passport-local-mongoose'),
	seedDB = require('./seeds');

seedDB();
mongoose.connect('mongodb://localhost/swole');

var app = express();
app.set('view engine', 'ejs');

app.use(
	require('express-session')({
		secret: 'very secret secret',
		resave: false,
		saveUninitialized: false
	})
);
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(methodOverride('_method'));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
});
// =================
// ROUTES
// =================

app.get('/', function (req, res) {
	res.render('home');
});

app.get('/profile', isLoggedIn, function (req, res) {
	User.find({}, function (err, allUsers) {
		if (err) {
			console.log(err);
		} else {
			res.render('profile', {
				currentUser: req.user
			});
		}
	});
});

// UPDATE USER INFORMTION
app.put('/profile', function (req, res) {
	User.update(req.user, req.body.userInfo, function (err, updatedUser) {
		if (err) {
			res.redirect('/profile');
			console.log(err);
		} else {
			res.redirect('/profile');
		}
	});
});

// app.get("/menu", function(req, res){
//     res.render("menu");
// });

app.post('/', function (req, res) {
	console.log(req.body.weight)
	Food.find({}, function (err, allFood) {
		if (err) {
			console.log(err);
		} else {
			res.render('menu', {
				weight: req.body.weight,
				multiple: req.body.sizeBy,
				goal: req.body.goal,
				food: allFood
			});
		}
	});
});




app.post('/profile', function (req, res) {
	Food.find({}, function (err, allFood) {
		if (err) {
			console.log(err);
		} else {
			res.render('menu', {
				weight: req.body.weight,
				multiple: req.body.sizeBy,
				goal: req.body.goal,
				food: allFood

			});
		}
	});
});

// =================
// AUTH ROUTES
// =================
app.get('/register', function (req, res) {
	res.render('register');
});
app.post('/register', function (req, res) {
	User.register(
		new User({
			username: req.body.username,
			weight: req.body.weight,
			gainMuscleIsTrue: req.body.gainMuscle,
			genderIsMale: req.body.genderMale,
			multiple: req.body.sizeBy
		}),
		req.body.password,
		function (err, user) {
			if (err) {
				console.log(err);
				return res.render('register');
			}
			passport.authenticate('local')(req, res, function () {
				res.redirect('/profile');
			});
		}
	);
});

//Login ROUTES
app.get('/login', function (req, res) {
	res.render('login');
});

app.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/profile',
		failureRedirect: '/login'
	}),
	function (req, res) {}
);

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}

app.listen(3000, function () {
	console.log('Serving app on port 3000');
});