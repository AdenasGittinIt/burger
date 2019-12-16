const orm = require("../config/orm");

const burger = {
  create: function(req,cb) {
    orm.create(req, "burgers", function(result) {
      cb(result);
    })
  },
  selectAll: function(cb) {
    orm.selectAll("burgers", function(result) {
      cb(result);
    });
  },
  selectOne: function(cb) {
    orm.selectOne("burgers", function(res) {
      cb(res);
    });
  },
  updateOne: function(req, condition, cb) {
    orm.updateOne("burgers", req, condition, function(res)
    {
      cb(res);
    });
  },
}

module.exports = burger;