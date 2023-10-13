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
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    lip_concerns: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    spf_ingredients: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    skin_concerns: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    skin_type: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    product_type: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    product_cheap: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    product_expensive: {
      type: DataTypes.STRING(1234),
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