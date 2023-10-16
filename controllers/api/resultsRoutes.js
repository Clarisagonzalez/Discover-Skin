const router = require('express').Router();
const { Op } = require('sequelize');
const { skincareData } = require('../../models');

router.get('/:data', (req, res) => {

    skincareData.findAll({
        attributes: ['skin_type', 'product_type', 'description', 'product_cheap', 'product_expensive'],
        where: {
          category: {
            [Op.in]: ['Moisturizer', 'Cleanser', 'Makeup Remover'],
          },
          skin_type: {
            [Op.like]: req.params.data.skin_type,
          },
        },
      }).then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.json(results);
      }).catch(err => {
        console.error('Error:', err);
      });
  });

  router.post('/', (req, res) => {
    const requestData = req.body; // This contains the data sent from the client
  
    // Now you can use requestData in your server logic, such as your Sequelize query
    skincareData.findAll({
      attributes: ['skin_type', 'product_type', 'description', 'product_cheap', 'product_expensive'],
      where: {
        category: {
          [Op.in]: ['Moisturizer', 'Cleanser', 'Makeup Remover'],
        },
        skin_type: {
          [Op.like]: requestData.skin_type, // Use the data from the request
        },
      },
    })
    .then(results => {
      // Handle the results and send a response
      res.json(results);
    })
    .catch(err => {
      console.error('Error:', err);
      // Handle errors and send an appropriate error response
      res.status(500).json({ error: 'Internal server error' });
    });
  });
module.exports = router;