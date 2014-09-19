"use strict";

var express = require("express");
var router = express.Router();
var models = require("../models");
var passport = require("../lib/passport");
var multipart = require("connect-multiparty");
var fs = require("fs");
var mime = require("mime");

router.get("/new", function(req, res) {
  res.render("sessions/new", { title: "Sessions | New", flash: req.flash() });
});

router.post("/create", function (req, res, next) {
  if (req.param("button") === "Register") {
    models.User.create({
      username: req.param("username"),
      password: req.param("password")
    }).success(function (user) {
      req.login(user, function () {
        req.flash("info", "Registration successful");
        res.redirect("/admin");
      });
    });
  } else {
    passport.authenticate("local", {
      successRedirect: "/admin",
      failureRedirect: "/sessions/new",
      failureFlash: true,
      successFlash: true
    })(req, res, next);
  }
});

router.get("/destroy", function(req, res) {
  req.logout();
  req.flash("success", "Logout successful!");
  res.redirect("/");
});

module.exports = router;
