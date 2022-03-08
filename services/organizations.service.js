const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class OrganizationService {

  constructor () {}

  async create (data) {
    const organization = await models.Organization.create(data);
    return organization;
  }

  async find () {
    const organizations = await models.Organization.findAll({
      include: ['objects']
    });
    return organizations;
  }

  async findOne (id) {
    const organization = await models.Organization.findByPk(id, {
      include: ['objects']
    });
    if (!organization) {
      throw boom.notFound('Organization not found');
    }
    return organization;
  }

  async update (id, changes) {
    const organization = await this.findOne(id);
    const rpta = await organization.update(changes);
    return rpta;
  }

  async delete (id) {
    const organization = await this.findOne(id);
    const rpta = await organization.destroy();
    return rpta;
  }

  async getOrganizationValues () {

  }

}

module.exports = OrganizationService;
