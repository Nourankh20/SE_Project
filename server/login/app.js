var express = require("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose =
		require("passport-local-mongoose"),
	User = require("./models/user");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const CONNECTION_URL = 'mongodb+srv://kereloseMalak:tassonouranomaimamangokero@cluster0.len1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true , useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
    console.log(`connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
app.get("/", function (req, res) {
	res.render("home");
});

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
	res.render("secret");
});

// Showing register form
app.get("/register", function (req, res) {
	res.render("register");
});

// Handling user signup
app.post("/register", function (req, res) {
	var username = req.body.username
	var password = req.body.password
	User.register(new User({ username: username }),
			password, function (err, user) {
		if (err) {
			console.log(err);
			return res.render("register");
		}

		passport.authenticate("local")(
			req, res, function () {
			res.render("secret");
		});
	});
});



app.get("/login", function (req, res) {
	res.render("login");
});

//Handling user login
app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function (req, res) {
});


app.get("/forgot", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }

    //UI with one input for email
    res.render("forgot");
});

app.post("/forgot", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }
    User.forgot(req, res, function (err) {
        if (err) {
            req.flash('error', err);
        }
        else {
            req.flash('success', 'Please check your email for further instructions.');
        }
        res.redirect("/");
    });
});

app.get("/reset/:token", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }
    var token = req.params.token;
    User.checkReset(token, req, res, function (err, data) {
        if (err)
            req.flash('error', err);

        //show the UI with new password entry
        res.render("reset");
    });
});

app.post("/reset", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }
    User.reset(req, res, function (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect("/reset");
        }
        else {
            req.flash('success', 'Password successfully reset.  Please login using new password.');
            return res.redirect("/login");
        }
    });
});


//Handling user logout
app.get("/logout", function (req, res) {
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/login");
}


var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server Has Started!");
});
app.get("/forgot", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }

    //UI with one input for email
    res.render("forgot");
});

app.post("/forgot", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }
    User.forgot(req, res, function (err) {
        if (err) {
            req.flash('error', err);
        }
        else {
            req.flash('success', 'Please check your email for further instructions.');
        }
        res.redirect("/");
    });
});

app.get("/reset/:token", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }
    var token = req.params.token;
    User.checkReset(token, req, res, function (err, data) {
        if (err)
            req.flash('error', err);

        //show the UI with new password entry
        res.render("reset");
    });
});

app.post("/reset", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }
    User.reset(req, res, function (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect("/reset");
        }
        else {
            req.flash('success', 'Password successfully reset.  Please login using new password.');
            return res.redirect("/login");
        }
    });
});