const faker = require('faker');
const { I } = inject();

class InterfaceData {

  getUsername() {
    return faker.internet.email();
  }

  getPassword() {
    return faker.internet.password();
  }
}

module.exports = new InterfaceData;