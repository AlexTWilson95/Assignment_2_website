var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home', activePage: "" });
});

/* GET about page */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me', activePage: "about" });
});

/* GET projects page */
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects', activePage: "projects" });
});

/* GET contact page */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Me', activePage: "contact" });
});

module.exports = router;

