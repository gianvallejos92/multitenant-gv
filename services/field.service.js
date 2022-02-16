const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class FieldService {

  constructor () {}

  async create (data) {
    const field = await models.Field.create(data);
    return field;
  }

  async find () {
    const fields = await models.Field.findAll();
    return fields;
  }

  async findOne (id) {
    const field = await models.Field.findByPk(id);
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

  async getOrganizationValues () {

  }

}

module.exports = FieldService;
