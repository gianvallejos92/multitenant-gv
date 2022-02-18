'use strict';

const { OBJECT_TABLE, ObjectSchema } = require('./../models/object.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(OBJECT_TABLE, 'organizationId', ObjectSchema.organizationId);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(OBJECT_TABLE, 'organizationId')
  }
};
