'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    static associate(models) {
    }
  }
  payments.init({
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    account: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'payments',
    underscored: true,
    freezeTableName: true,
    timestamps: false,
  });
  return payments;
};