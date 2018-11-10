
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME || 'localhost',
  user     : process.env.RDS_USERNAME || 'root',
  password : process.env.RDS_PASSWORD || '',
  port     : process.env.RDS_PORT || 3306,
  // host : 'aa1up1m3dzex7j6.cuxheluft31u.us-east-2.rds.amazonaws.com',
  // user: 'airhackersuser',
  // password: 'photospassword',
  // port: 3306,
  database : "photosdb"
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
