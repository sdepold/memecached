"use strict";

var express = require("express");
var router = express.Router();
var models = require("../models");
var passport = require("../lib/passport");
var multipart = require("connect-multiparty");
var fs = require("fs");
var mime = require("mime");

router.get(
  "/",
  passport.loginRequired,
  function (req, res) {
    models.Entry.findAll().success(function (entries) {
      res.render("admin/index", {
        title: "Admin | Index",
        flash: req.flash(),
        entries: entries
      });
    });
  }
);

router.post("/create", passport.loginRequired, multipart(), function (req, res) {
  var filePath = req.files.file.path;
  var data     = fs.readFileSync(filePath);

  models.Entry.create({
    data:     data,
    name:     req.param("name"),
    mimeType: mime.lookup(filePath)
  }).success(function () {
    req.flash("success", "Entry successfully saved!");
    res.redirect("/admin");
  });
});

module.exports = router;
