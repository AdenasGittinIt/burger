const connection = require("./connection");

const orm = {
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
  updateOne: function(table, objColVals, condition, cb) {
    let queryString = `Update ${table}`;

    queryString += " SET ";
    queryString += objToSql(objColVals);
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



selectAll(tableInput, cb)
selectOne(tableInput, cb)
updateOne(table, objColVals, condition, cb)