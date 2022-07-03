const { DataTypes, Sequelize } = require('sequelize');
const User = require('./user');

module.exports = class Balance extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      question: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      choice1: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      choice2: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Balance',
      tableName: 'Balances',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
