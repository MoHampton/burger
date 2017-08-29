// Require modules and packages
var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    // table_name, [burger_name, devoured], [forminput1, forminput2], callback
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers",condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;