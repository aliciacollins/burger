// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
      console.log("burgers all",res);
    });
  },
  ///not working
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(result) {
      cb(result);
      console.log("burgers create",result);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
      console.log("burgers update",res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;