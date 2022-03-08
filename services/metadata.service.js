const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class MetadataService {

  constructor () {}

  async create (data) {
    const newObject = await models.Object.create(data);
    return newObject;
  }

  async findOrganizationMetadata (orgId) {
    const object = await models.Organization.findAll({
      where: {
        id: orgId
      },
      include: ['objects']
    });
    return object;
  }

  async findObjectMetadata (objectId) {
    const object = await models.Object.findAll({
      where: {
        id: objectId
      },
      include: ['fields']
    });
    return object;
  }

  async getRecordsByFields (field_ids) {
    const object = await models.Field.findAll({
      where: {
        id: field_ids
      },
      include: ['object', 'records']
    });
    return object;
  }

  async findFieldMetadata (fieldId) {
    const object = await models.Field.findAll({
      where: {
        id: fieldId
      },
      include: ['object', 'records']
    });
    return object;
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

module.exports = MetadataService;
