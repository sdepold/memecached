"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration
      .createTable("Sessions", {
        sid: DataTypes.STRING,
        data: DataTypes.TEXT
      })
      .complete(done);
  },
  down: function(migration, DataTypes, done) {
    migration
      .dropTable("Sessions")
      .complete(done);
  }
};
