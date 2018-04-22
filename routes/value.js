var express = require('express');
var router = express.Router();
const db = require('./db');

/* GET users listing. */
router.get('/:newValue', function(req, res, next) {
  const data = db.getData();
  data.counter = req.params.newValue;
  console.log('increment', data);
  db.setData(data);
  res.send('OK');
});

module.exports = router;
