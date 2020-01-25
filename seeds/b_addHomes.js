var faker = require('faker');

const createHome = () => ({
  stateId: faker.random.number({min: 1, max: 20}),
  housePrice: faker.random.number({min: 500000, max: 5000000}),
  monthlyHOA: faker.random.number({min: 500, max: 5000})
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  const fakeHomes = [];
  const desiredFakeHomes = 50;
  for (let i = 0; i < desiredFakeHomes; i++) {
    fakeHomes.push(createHome());
  }
  return knex('homes').insert(fakeHomes);
};
