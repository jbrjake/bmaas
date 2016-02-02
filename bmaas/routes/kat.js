var express = require('express');
var router = express.Router();

/* Serve up Kat */
router.get('/', function(req, res, next) {
  res.send('<html><img src ="http://www.briansmom.com/slave_kat.png"></html>');
});

module.exports = router;
