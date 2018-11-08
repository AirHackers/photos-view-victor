
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'photosdb',
});

const insertToDBAsync = (data) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO photos (propertyID, url, description) VALUES (?, ?, ?)';
    db.query(query, [data.propertyID, data.url, data.description], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
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

module.exports = { getFromDB, db, insertToDBAsync };
