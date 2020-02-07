var mysql = require('mysql');
var Promise = require('bluebird');

var db = mysql.createConnection({
  user: 'root'@'localhost',
  database: 'MortgageCalculator',
  password: 'MyNewPass4!'
});

db.connect(); 
db.query = Promise.promisify(db.query);

module.exports = db; 
