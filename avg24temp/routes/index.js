var config = require('../config');

var express = require('express');
var router = express.Router();
console.log(config);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
