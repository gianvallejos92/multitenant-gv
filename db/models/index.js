const { OrganizationSchema, Organization } = require('./organization.model');
const { ObjectSchema, Object } = require('./object.model');
const { FieldSchema, Field } = require('./field.model');
const { RecordSchema, Record } = require('./record.model');

function setupModels(sequelize) {
  Object.init(ObjectSchema, Object.config(sequelize));
  Organization.init(OrganizationSchema, Organization.config(sequelize));
  Field.init(FieldSchema, Field.config(sequelize));
  Record.init(RecordSchema, Record.config(sequelize));
}

module.exports = setupModels;
