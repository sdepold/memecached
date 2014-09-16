"use strict";

var passportLocalSequelize = require('passport-local-sequelize');

module.exports = function(sequelize, DataTypes) {
  return passportLocalSequelize.defineUser(sequelize);
};
