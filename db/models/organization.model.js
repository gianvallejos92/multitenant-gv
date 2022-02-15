const {Model, DataTypes, Sequelize } = require('sequelize');

const ORGANIZATION_TABLE = 'organizations';

const OrganizationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  capacity: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
};

class Organization extends Model {
  static associate () {
    //associate (relations).
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: ORGANIZATION_TABLE,
      modelName: 'Organization',
      timestamps: false
    }
  }
}

module.exports = { ORGANIZATION_TABLE, OrganizationSchema, Organization };
