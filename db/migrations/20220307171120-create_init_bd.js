'use strict';

const { ORGANIZATION_TABLE, OrganizationSchema } = require('../models/organization.model');
const { OBJECT_TABLE, ObjectSchema } = require('./../models/object.model');
const { RECORD_TABLE, RecordSchema } = require('../models/record.model');
const { FIELD_TABLE, FieldSchema } = require('../models/field.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORGANIZATION_TABLE, OrganizationSchema);
    await queryInterface.createTable(OBJECT_TABLE, ObjectSchema);
    await queryInterface.createTable(FIELD_TABLE, FieldSchema);
    await queryInterface.createTable(RECORD_TABLE, RecordSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORGANIZATION_TABLE);
    await queryInterface.dropTable(OBJECT_TABLE);
    await queryInterface.dropTable(RECORD_TABLE);
    await queryInterface.dropTable(FIELD_TABLE);
  }
};
