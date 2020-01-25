var faker = require('faker');
const createInsurance = () => ({
  stateId: faker.random.number({min: 1, max: 20}),
  insuranceRate: faker.finance.amount(0.1, 0.3, 2)
});

exports.seed = function(knex) {
  const fakeInsurance = [];
  const desiredFakeInsurance = 20;
  for (let i = 0; i < desiredFakeInsurance; i++) {
    fakeInsurance.push(createInsurance());
  }
  return knex('insurance').insert(fakeInsurance);
};
