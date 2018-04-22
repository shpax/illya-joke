const express = require('express');
const router = express.Router();
const db = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = db.getData();

  res.render('index', data);
});

module.exports = router;
