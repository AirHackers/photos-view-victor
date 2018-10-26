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

// !!!!!!!!!!!!!!!!! need id from url. From express i need to get req.query !!!!!!!!!!!!!!!!!!!

var insertToDB = (data, cb) => {
  var query = `INSERT INTO photos (propertyID, url, description) VALUES (?, ?, ?)`; 
  db.query(query, [randomUrlGenerator, descriptionGenerator], function(error, results, fields) {
    callback(error, null);
  });
}

// !!!!!!!!!!!!!!!!!! REDO QUERY STATEMENT TO CORRECT PHRASE !!!!!!!!!!!!!!!!!!

var getFromDB = () => {
  var query = `SELECT * FROM photos WHERE propertyID ON ?`  ;
  db.query(query, [id], function(error, results, fields) {
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
