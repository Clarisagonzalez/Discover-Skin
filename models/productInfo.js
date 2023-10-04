const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class productInfo extends Model {}


productInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ProductTypes:{
      type:DataTypes.STRING,
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProductDescription: {
      type: DataTypes.STRING,
    },
    ProductPrice: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
 
    skin_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'SkinType',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productInfo',
  }
);


module.exports = Products;
