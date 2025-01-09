var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus'); // Ensure 'aboutus.ejs' exists in the views folder
});

router.get('/contact', function(req, res, next) {
  res.render('contact'); // Ensure 'contact.ejs' exists in the views folder
});

router.get('/our_team', function(req, res, next) {
  res.render('our_team'); // Ensure 'our_team.ejs' exists in the views folder
});

router.get('/workshop', function(req, res, next) {
  res.render('workshop'); // Ensure 'workshop.ejs' exists in the views folder
});

router.get('/project', function(req, res, next) {
  res.render('project'); // Ensure 'project.ejs' exists in the views folder
});

router.get('/event', function(req, res, next) {
  res.render('event'); // Ensure 'event.ejs' exists in the views folder
});

module.exports = router;
