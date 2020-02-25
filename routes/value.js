var express = require('express');
var router = express.Router();
const db = require('./db');

router.get('/:newValue', function(req, res, next) {
  const data = db.getData();
  data.counter = req.params.newValue;
  console.log('increment', data);
  db.setData(data);
  res.send('OK');
});

// copy of get request
router.post('/:newValue', function(req, res, next) {
  const data = db.getData();
  data.counter = req.params.newValue;
  console.log('increment', data);
  db.setData(data);
  res.send('OK');
});

router.get('/', function(req, res, next) {
  const data = db.getData();
  res.send(data && data.counter);
});

module.exports = router;
