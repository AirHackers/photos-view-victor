var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'photosdb'
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
})

var insertToDB = (data, cb) => {
  var query = `INSERT INTO photos (propertyID, url, description) VALUES (?, ?, ?)`; 
  db.query(query, [data.propertyID, data.url, data.description], function(error, results, fields) {
    if (error) {
      cb(error);
      console.log(results);
    }
  });
}

var getFromDB = (propertyID, callback) => {
  var query = `SELECT * FROM photos WHERE propertyID ON ?`;
  db.query(query, propertyID, function(error, results, fields) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = db;
module.exports = insertToDB;
