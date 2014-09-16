var express = require('express');
var router = express.Router();
var models = require("../models");
var passport = require('passport');
var multipart = require('connect-multiparty');
var fs = require("fs");

var loginRequired = passport.authenticate('session', { failureRedirect: "/admin/login", failureFlash: true, successFlash: true });

router.get('/', loginRequired, function (req, res) {
  models.Entry.findAll().success(function (entries) {
    res.render("admin/index", {
      title: "Admin | Index",
      flash: req.flash(),
      entries: entries
    });
  });
});

router.post('/create', loginRequired, multipart(), function (req, res) {
  var data = fs.readFileSync(req.files.file.path);

  models.Entry.create({
    data: data,
    name: req.param("name")
  }).success(function () {
    req.flash("success", "Entry successfully saved!")
    res.redirect("/admin")
  })
});

router.get('/login', function(req, res) {
  res.render('admin/login', { title: "Admin | Login", flash: req.flash() });
});

router.post('/login', function (req, res, next) {
  if (req.param("button") === "Register") {
    handleRegistration(req, res)
  } else {
    passport.authenticate('local', {
      successRedirect: "/admin",
      failureRedirect: "/admin/login",
      failureFlash: true,
      successFlash: true
    })(req, res, next)
  }
});

var handleRegistration = function (req, res) {
  models.User.register(
    req.param("username"),
    req.param("password"),
    function (err, user) {
      if (err) {
        res.render("admin/login", {
          title: "Admin | Login",
          flash: { error: err }
        })
      } else {
        req.flash("info", "Registration successful");
        res.redirect("/admin");
      }
    }
  );
}

module.exports = router;
