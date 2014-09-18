"use strict";

var passportLocalSequelize = require("passport-local-sequelize");

module.exports = function(sequelize) {
  return passportLocalSequelize.defineUser(sequelize);
};
