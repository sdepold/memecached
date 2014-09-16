"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration
      .createTable('Entries', {
        name: DataTypes.STRING,
        data: DataTypes.BLOB
      })
      .complete(done)
  },

  down: function(migration, DataTypes, done) {
    migration
      .dropTable('Entries')
      .complete(done)
  }
};
