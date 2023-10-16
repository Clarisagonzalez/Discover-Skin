const router = require('express').Router();
const { Op } = require('sequelize');
const { skincareData } = require('../../models');


  router.post('/question1', (req, res) => {
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
  router.post('/question2', (req, res) => {
    const requestData = req.body; // This contains the data sent from the client
  
   
    skincareData.findAll({
        attributes: ['skin_type','ingredients', 'product_type', 'description', 'product_cheap', 'product_expensive'],
        where: {
          category: {
              [Op.like]: 'Eye cream',
          },
          skin_type: {
              [Op.like]: requestData.eye_concerns, // Use the data from the request
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

  router.post('/question3', (req, res) => {
    const requestData = req.body; // This contains the data sent from the client
  
   
    skincareData.findAll({
        attributes: ['skin_concerns','ingredients', 'product_type', 'description', 'product_cheap', 'product_expensive'],
        where: {
          category: {
              [Op.like]: 'Serum',
          },
          skin_concerns: {
              [Op.like]: requestData.serum_choice, // Use the data from the request
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
  
  
  router.post('/question4', (req, res) => {
    const requestData = req.body; // This contains the data sent from the client
  
   
    skincareData.findAll({
        attributes: ['skin_concerns','ingredients', 'product_type', 'description', 'product_cheap', 'product_expensive'],
        where: {
          category: {
              [Op.like]: 'Toner',
          },
          skin_concerns: {
              [Op.like]: requestData.toner_choice, // Use the data from the request
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
  
  router.post('/question5', (req, res) => {
    const requestData = req.body; // This contains the data sent from the client
  
   
    skincareData.findAll({
        attributes: ['spf_ingredients','ingredients', 'description', 'product_cheap', 'product_expensive'],
        where: {
          category: {
              [Op.like]: 'SPF',
          },
          spf_ingredients: {
              [Op.like]: requestData.spf_ingredient, // Use the data from the request
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
  
  router.post('/question6', (req, res) => {
    const requestData = req.body; // This contains the data sent from the client
  
   
    skincareData.findAll({
        attributes: ['lip_concerns','ingredients', 'description', 'product_cheap', 'product_expensive'],
        where: {
          category: {
              [Op.like]: 'Lip Moisturizer',
          },
          lip_concerns: {
              [Op.like]: requestData.lip_concerns, // Use the data from the request
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