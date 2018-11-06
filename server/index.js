const port = 3002;
const express = require('express');
const getFromDB = require('../database/index.js');

const app = express();

app.use(express.json());
app.use(express.static('public'));

// Allow CORS for a given endpoint
const allowCORS = function(res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}

app.get('/photos/:propertyID', (req, res) => {
  getFromDB(req.params.propertyID, (err, results) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      allowCORS(res);
      res.status(200);
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log('listening at port: ', port);
});
