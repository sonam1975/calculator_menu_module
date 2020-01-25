var faker = require('faker');
const createTax = () => ({
  stateId: faker.random.number({min: 1, max: 20}),
  statePropTax: faker.finance.amount(0.25, 2.75, 2)
});

exports.seed = function(knex) {
  const fakeTaxes = [];
  const desiredFakeTaxes = 20;
  for (let i = 0; i < desiredFakeTaxes; i++) {
    fakeTaxes.push(createTax());
  }
  return knex('taxes').insert(fakeTaxes);
};
