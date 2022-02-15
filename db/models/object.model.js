const { Model, DataTypes, Sequelize } = require('sequelize');

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
  }
};

class Object extends Model {
  static associate() {
    // associate (relaciones) To OrgId
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
