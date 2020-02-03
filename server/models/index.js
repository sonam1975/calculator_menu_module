var db = require('../db/connection.js');
var _ = require('underscore');
///////////
/* model */
///////////

module.exports = {
  homes : {
    /*
      This function retrieves 1 random house with the associated property tax, insurance, etc. 
      Sends back the result as a single object with all necessary properties to parse on client side. 
    */
    get : (callback) => {
      var concatResults = {}; 
      return db.query('SELECT * from homes ORDER BY RAND() LIMIT 1')
       .then(results => {
        _.extend(concatResults, results[0]);
        return db.query(`SELECT statePropTax from taxes WHERE stateId = ${concatResults.stateId}`);
       })
       .then(results => {
        if (results[0] === undefined) {
          _.extend(concatResults, { statePropTax: 1.5 });
        } else {
          _.extend(concatResults, results[0]);
        }
         return db.query(`SELECT insuranceRate from insurance WHERE stateId = ${concatResults.stateId}`);
       })
       .then(results => {
         if (results[0] === undefined) {
           _.extend(concatResults, { insuranceRate: 0.2 });
         } else {
           _.extend(concatResults, results[0]);
         }
         // throw in a fixed 30 year interest rate for now
         // this should be part of refactoring DB to include interest rates
         _.extend(concatResults, { interestRate: 3.7 });
         callback(null, concatResults);
       })
       .catch(err => {
         console.log(err);
         callback(err, null);
       })
    }
  },
  bank : {
    /*
      This function retrieves 5 random banks to populate the carousel cards with. 
      We care about bankId, bankName, interestRate
    */
    get : (callback) => {
      return db.query('SELECT * from bankRates ORDER BY RAND() LIMIT 5')
      .then(result => {
        callback(null, result)
      })
      .catch(err => {
        console.log(err);
        callback(err, null);
      })

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