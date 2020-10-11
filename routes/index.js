var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about.ejs', { title: 'About Page' });
});
/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('Project.ejs', { title: 'Project Page' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services.ejs', { title: 'Services Page' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { title: 'Contact Page' });
});


module.exports = router;
