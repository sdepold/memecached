"use strict";

var mime = require("mime");

module.exports = function(sequelize, DataTypes) {
  var Entry = sequelize.define("Entry", {
    name:     DataTypes.STRING,
    mimeType: { type: DataTypes.STRING, field: "mime_type" },
    data:     DataTypes.BLOB
  }, {
    instanceMethods: {
      imagePath: function () {
        return "/entries/" + this.id + "." + mime.extension(this.mimeType)
      }
    },

    classMethods: {
      associate: function(models) {
        Entry.belongsTo(models.User);
        models.User.hasMany(Entry);
      }
    }
  });

  return Entry;
};
