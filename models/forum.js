const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class forum extends Model {}

forum.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      date:{
        type:DataTypes.DATE,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
      author: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'forum',
    }
  );
  
  module.exports = forum;