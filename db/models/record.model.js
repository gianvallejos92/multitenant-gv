const {Model, DataTypes, Sequelize } = require('sequelize');

const { FIELD_TABLE }  = require('./field.model');

const RECORD_TABLE = 'records';

const RecordSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  value: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  fieldId: {
    field: 'field_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: FIELD_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Record extends Model {
  static associate (models) {
    this.belongsTo(models.Field, { as: 'field' });
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: RECORD_TABLE,
      modelName: 'Record',
      timestamps: false
    }
  }
}

module.exports = { RECORD_TABLE, RecordSchema, Record };
