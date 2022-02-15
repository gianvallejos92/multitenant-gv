const { models } = require('../libs/sequelize');

class ObjectService {

  constructor () {}

  async create (data) {
    const newObject = await models.Object.create(data);
    return newObject;
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
