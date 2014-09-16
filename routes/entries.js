var express = require('express');
var router = express.Router();
var models = require("../models");

router.get('/:id.:format', function(req, res) {
  models.Entry.find({
    where: { id: req.param("id") }
  }).success(function (entry) {
    res.set('Content-Type', entry.mimeType);
    res.send(entry.data);
  });
});

module.exports = router;
