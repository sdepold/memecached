"use strict";

module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define("Session", {
    sid:  DataTypes.STRING,
    data: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(/*models*/) {
         // associations can be defined here
      }
    }
  });

  return Session;
};
