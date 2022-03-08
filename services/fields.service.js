const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class FieldService {

  constructor () {}

  async create (data) {
    const field = await models.Field.create(data);
    return field;
  }

  async find () {
    const fields = await models.Field.findAll({
      include: ['object', 'records']
    });
    if (!fields) {
      throw boom.notFound('Field not found');
    }
    return fields;
  }

  async findOne (id) {
    const field = await models.Field.findByPk(id, {
      include: ['object', 'records']
    });
    if (!field) {
      throw boom.notFound('Field not found');
    }
    return field;
  }

  async update (id, changes) {
    const field = await this.findOne(id);
    const rpta = await field.update(changes);
    return rpta;
  }

  async delete (id) {
    const field = await this.findOne(id);
    const rpta = await field.destroy();
    return rpta;
  }

}

module.exports = FieldService;
