const connection = require("./connection");

const orm = {
  create: function(req,tableInput, cb) {
    let queryString = `INSERT INTO ${tableInput} (burger_name, devoured) VALUES ('${req.body.burger_name}', false)`
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    }) 
  },
  selectAll: function(tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    });
  },
  selectOne: function(tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput} WHERE id = ?;`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    });
  },
  updateOne: function(table, req, condition, cb) {
    let queryString = `Update ${table}`;

    queryString += " SET ";
    queryString +=  " devoured = " +req.body.devoured;
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
}

module.exports = orm