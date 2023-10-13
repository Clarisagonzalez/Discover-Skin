const router = require('express').Router();
const { quizData } = require('../../models');


router.post('/results', async(req, res) => {
    try {
        const quizresponse = await quizData.create(req.body);


        console.log(quizresponse);
        res.render('results')


        req.session.save(() => {    
            res.status(200).json(quizresponse);
        }
    )}    
    catch (err) {
    res.status(400).json(err);
  }
});

// router.post('/results', async (req, res) => {
//     try {
//       console.log(req.body);
//       const quizresponse = await quizData.create(req.body);
 
//       console.log(quizresponse);
       
//       req.session.save(() => {
//         req.session.user_id = quizresponse.id;
 
//         res.status(200).json(quizresponse);
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }


//   });


  module.exports = router;