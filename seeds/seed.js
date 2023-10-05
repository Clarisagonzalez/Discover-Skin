const sequelize = require('../config/connection');
const {userInfo, quizData, productInfo} = require('../models');


const userData = require('./userData.json');
const productsData = require('./productsData.json');
const skinTypes = require('./skinTypes.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });


  const users = await userInfo.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  const productInfo = await productInfo.bulkCreate(productsData);


  const skinInfo = await skinTypeInfo.bulkCreate(skinTypes);


 
  process.exit(0);
};


seedDatabase();
