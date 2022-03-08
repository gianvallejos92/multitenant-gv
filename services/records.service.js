const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class RecordService {

  constructor () {}

  async create (data) {
    const record = await models.Record.create(data);
    return record;
  }

  async find () {
    const records = await models.Record.findAll({
      include: ['field']
    });
    return records;
  }

  async findOne (id) {
    const record = await models.Record.findByPk(id, {
      include: ['field']
    });
    if (!record) {
      throw boom.notFound('Record not found');
    }
    return record;
  }

  async update (id, changes) {
    const record = await this.findOne(id);
    const rpta = await record.update(changes);
    return rpta;
  }

  async delete (id) {
    const record = await this.findOne(id);
    const rpta = await record.destroy();
    return rpta;
  }

  async getOrganizationValues () {

  }

}

module.exports = RecordService;
