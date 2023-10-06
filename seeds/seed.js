const sequelize = require('../config/connection');
const {userInfo, quizData, productInfo, forum} = require('../models');


const userData = require('./userData.json');
const productsData = require('./productsData.json');
const quizResponse = require('./quizData.json');
const forumData = require('./forumData.json');
// const skinTypes = require('./skinTypes.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await userInfo.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log(users);
  const productVar = await productInfo.bulkCreate(productsData);
  console.log(productVar);
  const quizVar = await quizData.bulkCreate(quizResponse);
  console.log(quizVar);
  const forumVar = await forum.bulkCreate(forumData);
  console.log(forumVar);
  // await skinTypes.bulkCreate(skinTypes);

  process.exit(0);
};


seedDatabase();
