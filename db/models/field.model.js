const {Model, DataTypes, Sequelize } = require('sequelize');

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
    type: DataTypes.STRING,
    unique: true,
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING
  },
  size: {
    allowNull: false,
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
  }
};

class Field extends Model {
  static associate () {
    //associate (relations).
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
