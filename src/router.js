const express = require('express');
const router  = express.Router();
const controller = require('./controllers/controller');
/*
router.get('/', (req, res)=>{
   //res.send('Index');
   res.render('index');
});

router.get('/sobre', (req, res)=>{
   //res.send('Sobre');
   res.render('about');
});
*/
router.get('/', controller.renderHomePage);
router.post('/', controller.getSoma);
router.get('/sobre', controller.renderAboutPage);

module.exports = router;