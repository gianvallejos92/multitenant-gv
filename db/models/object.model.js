const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORGANIZATION_TABLE } = require('./organization.model');

const OBJECT_TABLE = 'objects';

const ObjectSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name : {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  label: {
    allowNull: false,
    type: DataTypes.STRING
  },
  orgId: {
    allowNull: false,
    type: DataTypes.STRING(18),
    field: 'org_id'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  organizationId: {
    field: 'organization_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORGANIZATION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Object extends Model {
  static associate(models) {
    this.belongsTo(models.Organization, {as: 'organization'});
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: OBJECT_TABLE,
      modelName: 'Object',
      timestamps: false
    }
  }
}

module.exports = { OBJECT_TABLE, ObjectSchema, Object }
