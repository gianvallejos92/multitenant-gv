const { ObjectSchema, Object } = require('./object.model');

function setupModels(sequelize) {
  Object.init(ObjectSchema, Object.config(sequelize));
}

module.exports = setupModels;
