var app  = require("../../app.js");
var port = 1000 + ~~(Math.random() * 10000);

module.exports = function () {
  this.Before(function (callback) {
    this.server = app.listen(port, callback);
  });

  this.After(function (callback) {
    this.server.close(callback);
  });
}
