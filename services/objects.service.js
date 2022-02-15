const faker = require('faker');

class ObjectService {

  constructor () {
    this.objects = [];
    this.generate();
  }

  async generate () {
    for(let ind = 0; ind < 50; ind++) {
      this.objects.push({
        id: faker.datatype.uuid(),
        orgId: faker.datatype.uuid(),
        name: 'Object ' + ind,
        image: faker.image.imageUrl(),
      });
    }
  }

  async find () {
    return this.objects;
  }

  async getObjectValues () {

  }

  async getFieldData () {

  }

}

module.exports = ObjectService;
