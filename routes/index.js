var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about-us', function(req, res, next) {
  res.render('aboutus'); // Ensure 'aboutus.ejs' exists in the views folder
});

router.get('/contact-cs', function(req, res, next) {
  res.render('contact'); // Ensure 'contact.ejs' exists in the views folder
});

router.get('/our-team', function(req, res, next) {
  res.render('our_team'); // Ensure 'our_team.ejs' exists in the views folder
});

router.get('/workshops', function(req, res, next) {
  res.render('workshop'); // Ensure 'workshop.ejs' exists in the views folder
});

router.get('/projects', function(req, res, next) {
  res.render('project'); // Ensure 'project.ejs' exists in the views folder
});

router.get('/event', function(req, res, next) {
  res.render('event'); // Ensure 'event.ejs' exists in the views folder
});

module.exports = router;
