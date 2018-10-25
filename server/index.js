var express = require('express');
// var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;

var app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))





app.listen(port, () => {
  console.log('listening at port: ', port)
});