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

//SELECT * FROM nodejs.users;
User.findAll({});

//INSERT INTO nodejs.users (question, choice) VALUES ('두 가지 중 하나를 먹어야 한다면', '똥맛 카레' , '카레맛 똥');
const { Balance } = require('../models');
Balance.create({
  question : '두 가지 중 하나를 먹어야 한다면',
  choice1 : '똥맛 카레',
  choice2 : '카레맛 똥',
});