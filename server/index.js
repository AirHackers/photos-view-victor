var express = require('express');
var connection = require('../database/index.js');
// var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;

var app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

app.get('/photos', function(req, res) {
  res.send();
});



app.listen(port, () => {
  console.log('listening at port: ', port)
});