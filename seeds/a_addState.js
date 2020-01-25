var faker = require('faker');

const createState = () => ({
  name: faker.address.state()
})

exports.seed = function(knex) {
  // Deletes ALL existing entries
  const fakeStates = [];
  const desiredFakeStates = 20;
  for (let i = 0; i < desiredFakeStates; i++) {
    fakeStates.push(createState());
  }
  return knex('states').insert(fakeStates);
};
