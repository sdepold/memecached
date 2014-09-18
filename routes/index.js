"use strict";

var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index", { title: "Express", flash: req.flash() });
});

module.exports = router;
