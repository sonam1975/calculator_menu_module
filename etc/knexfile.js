module.exports = {
  development: {
    client: "mysql",
    connection: { 
      user: "root",
      database: "MortgageCalculator"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  },
};