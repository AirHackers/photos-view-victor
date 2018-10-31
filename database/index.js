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
  const query = 'INSERT INTO photos (propertyID, url, description) VALUES (?, ?, ?)';
  db.query(query, [data.propertyID, data.url, data.description], (error, results) => {
    if (error) {
      cb(error);
      console.log(results);
    }
  });
};

const getFromDB = (propertyID, callback) => {
  const query = 'SELECT * FROM photos WHERE propertyID = ?';
  db.query(query, propertyID, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = insertToDB;
module.exports = getFromDB;
