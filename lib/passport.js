"use strict";

var passport = require("passport");
var models   = require("../models");
var LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  models.User.find({ where: { id: id }}).done(function (err, user) {
    done(err, user);
  });
});

// Use local strategy to create user account
passport.use(new LocalStrategy(
  function(username, password, done) {
    models.User.find({ where: { username: username }}).success(function(user) {
      if (!user) {
        done(null, false, { message: 'Unknown user' });
      } else if (password != user.password) {
        done(null, false, { message: 'Invalid password'});
      } else {
        done(null, user);
      }
    }).error(function(err){
      done(err);
    });
  }
));

passport.loginRequired = function (req, res, next) {
  if (!!req.user) {
    next()
  } else {
    req.flash("error", "login required")
    res.redirect("/")
  }
}

module.exports = passport;
