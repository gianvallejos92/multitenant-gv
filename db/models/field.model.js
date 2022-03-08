const {Model, DataTypes, Sequelize } = require('sequelize');

const { OBJECT_TABLE }  = require('./object.model');

const FIELD_TABLE = 'fields';

const FieldSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING
  },
  size: {
    type: DataTypes.INTEGER
  },
  isRequired: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'is_required'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  objectId: {
    field: 'object_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: OBJECT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Field extends Model {
  static associate (models) {
    this.belongsTo(models.Object, { as: 'object' });
    this.hasMany(models.Record, {
      as: 'records',
      foreignKey: 'fieldId'
    });
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: FIELD_TABLE,
      modelName: 'Field',
      timestamps: false
    }
  }
}

module.exports = { FIELD_TABLE, FieldSchema, Field };
