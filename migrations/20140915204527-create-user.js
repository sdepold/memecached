"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration
      .createTable("Users", {
        name: DataTypes.STRING
      })
      .complete(done);
  },

  down: function(migration, DataTypes, done) {
    migration
      .dropTable("Users")
      .complete(done);
  }
};
