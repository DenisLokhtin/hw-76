const express = require('express');
const router = express.Router();
const fileDB = require('../fileDb.js');
const { nanoid } = require("nanoid");
const ID = nanoid();

router.get('/', (req, res) => {
  const messages = fileDB.getItems();
  res.send(messages);
});

router.post('/', (req, res) => {
  const currentDate = new Date().toISOString();
  const body = {...req.body, datetime: currentDate, id: ID, message: 'hello', author: 'Denis'}
  fileDB.addItem(body);
  res.setHeader('content-type', 'application/JSON');
  res.send(JSON.stringify(body));
});

module.exports = router;