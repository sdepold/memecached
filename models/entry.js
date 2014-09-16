"use strict";

module.exports = function(sequelize, DataTypes) {
  var Entry = sequelize.define("Entry", {
    name: DataTypes.STRING,
    data: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        Entry.belongsTo(models.User);
        models.User.hasMany(Entry);
      }
    }
  });

  return Entry;
};
