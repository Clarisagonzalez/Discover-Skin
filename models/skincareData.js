const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class skincareData extends Model {}

skincareData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lip_concerns: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    spf_ingredients: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skin_concerns: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skin_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cheap: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_expensive: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'skincareData',
  }
);

module.exports = skincareData;