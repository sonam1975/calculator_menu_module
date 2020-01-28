var mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  database: 'MortgageCalculator'
});

db.connect(); 

module.exports = db; 