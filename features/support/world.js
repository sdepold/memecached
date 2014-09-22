var models = require("../../models");

module.exports = function () {
  var Zombie = require("zombie");

  this.World = function (callback) {
    this.browser = new Zombie();
    this.visit   = function(urlPath, callback) {
      var addr = this.server.address();
      this.browser.visit("http://" + addr.address + ":" + addr.port + urlPath, callback);
    };

    models.sequelize.sync().success(function () {
      callback();
    });
  };
};
