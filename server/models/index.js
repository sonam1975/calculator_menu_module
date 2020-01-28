var db = require('../db/connection.js');

///////////
/* model */
///////////

module.exports = {
  homes : {
    get : (callback) => {
      db.query('SELECT * from homes', (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results); 
        }
      });
    }
  },
  insurance : {
    get : () => {}
  },
  mortgages : {
    get : () => {}
  },
  states : {
    get : () => {}
  },
  taxes : {
    get : () => {}
  }
}