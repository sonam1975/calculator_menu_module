var faker = require('faker');
const createBankRate = () => ({
  bankName: faker.company.companyName(),
  bankRate: faker.finance.amount(3, 4, 2)
});

exports.seed = function(knex) {
  const fakeBankRates = [];
  const desiredBankRates = 20;
  for (let i = 0; i < desiredBankRates; i++) {
    fakeBankRates.push(createBankRate());
  }
  return knex('bankRates').insert(fakeBankRates);
};
