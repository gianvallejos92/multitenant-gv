const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ObjectService {

  constructor () {}

  async create (data) {
    const newObject = await models.Object.create(data);
    return newObject;
  }

  async find () {
    const objects = await models.Object.findAll({
      include: ['organization', 'fields']
    });
    return objects;
  }

  async findOne (id) {
    const object = await models.Object.findByPk(id, {
      include: ['organization', 'fields']
    });
    if (!object) {
      throw boom.notFound('Object not found');
    }
    return object;
  }

  async update (id, changes) {
    const object = await this.findOne(id);
    const rpta = await object.update(changes);
    return rpta;
  }

  async delete (id) {
    const object = await this.findOne(id);
    const rpta = await object.destroy();
    return rpta;
  }

}

module.exports = ObjectService;
