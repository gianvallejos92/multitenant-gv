'use strict';

const { OBJECT_TABLE, ObjectSchema } = require('./../models/object.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(OBJECT_TABLE, ObjectSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(OBJECT_TABLE);
  }
};
