const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'photosdb',
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

const insertToDB = (data, cb) => {
  const query = `INSERT INTO photos (propertyID, url, description) VALUES (?, ?, ?)`; 
  db.query(query, [data.propertyID, data.url, data.description], function(error, results, fields) {
    if (error) {
      cb(error);
      console.log(results);
    }
  });
}

const getFromDB = (propertyID, callback) => {
  const query = `SELECT * FROM photos WHERE propertyID = ?`;
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
module.exports = getFromDB;
