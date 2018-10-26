var express = require('express');
var connection = require('../database/index.js');
var path = require('path');
var port = 3002;

var app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))


// !!!!!!!!!!!!!!!! AM I WRITING THIS CORRECTLY WITH THE QUERY STRING !!!!!!!!!!!!!!!!!!!!!!!
// DO I NEED /PHOTOS?ID=1 OR SOMETHING 
// SHOULD I USE REQ.QUERY 

app.get('/photos', function(req, res) {
  res.send();
});

app.listen(port, () => {
  console.log('listening at port: ', port)
});