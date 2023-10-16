const router = require('express').Router();
const { quizData } = require('../../models');

router.get('/results', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  quizData.findAll()
  .then(Data => {
    if(!Data) {
      res.status(404).json({message: 'No quizzes found in the database'});
      return;
    }
    // Render your Handlebars template with the data and send it to the client.
    res.render('results');

    // res.json(Data);
  })
  .catch(err => {
    console.log("Something went wrong");
    res.status(500).json(err)
  });
});

router.post('/results', async (req, res) => {
    try {
      console.log(req.body);
      const quizresponse = await quizData.create(req.body);
 
      console.log(quizresponse);
       
      req.session.save(() => {
        req.session.user_id = quizresponse.id;
 
        // res.status(200).json(quizresponse);

        res.render('results');
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;