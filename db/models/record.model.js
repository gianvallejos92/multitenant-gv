const {Model, DataTypes, Sequelize } = require('sequelize');

const RECORD_TABLE = 'Records';

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
  }
};

class Record extends Model {
  static associate () {
    //associate (relations).
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
