const news = require('../actions/news');

var express = require('express')
var router = express.Router()

router.get('/news', function (req, res) {
  res.json(news());
})

router.get('/something', function (req, res) {
  res.send('there you go, your something');
})


module.exports = router;