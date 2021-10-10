const express = require('express');
const router = express.Router();
const fileDB = require('../fs/fs')

router.get('/', (req, res) => {
  const messages = fileDB.read('./messages');
  res.setHeader('content-type', 'application/JSON');
  console.log(messages)
  res.send(JSON.stringify(messages));
});

router.post('/', (req, res) => {
  const currentDate = new Date().toISOString();
  const body = {...req.body, datetime: currentDate}
  fileDB.save(body, currentDate);
  res.setHeader('content-type', 'application/JSON');
  res.send(JSON.stringify(body));
});

module.exports = router;