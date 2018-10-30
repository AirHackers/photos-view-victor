const port = 3002;
const express = require('express');
// const path = require('path');
const getFromDB = require('../database/index.js');

const app = express();

app.use(express.json());
app.use(express.static('public'));
// app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/photos/:propertyID', (req, res) => {
  getFromDB(req.params.propertyID, (err, results) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(results);
    }
  });
});

// app.get('/photos/1', (req, res) => {
//   res.send(JSON.stringify({ 'response workingggg': 'response workingggg' }));
//   console.log('get workingggggg');
// });

app.listen(port, () => {
  console.log('listening at port: ', port);
});
