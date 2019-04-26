var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send({ msg: 'test1' })
});

router.get('/hello', function(req, res, next) {
  res.send({ msg: 'test' })
});



router.all('*', function(req, res, next) {
  next(createError(404, 'api 없음'));
});

module.exports = router;
