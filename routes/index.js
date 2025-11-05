var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/', function(req, res,) {
  res.render('about', { title: 'About Me' });
});

/* GET projects page. */
router.get('/', function(req, res,) {
  res.render('projects', { title: 'Projects' });
});

/* GET contact page. */
router.get('/', function(req, res,) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
