const port = 3002;
const express = require('express');
const getFromDB = require('../database/index.js').getFromDB;
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/:propertyID', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/photos/:propertyID', (req, res) => {
  getFromDB(req.params.propertyID, (err, results) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => {
  console.log('what is this', port);
});
