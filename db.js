
const sqlite3 = require('sqlite3').verbose();

module.exports = db = new sqlite3.Database('./quotes_sql.db', (err) => {
  if (err) {
    console.log('error');
  }
});

module.exports.openDb = function openDb() {
  db = new sqlite3.Database('./quotes_sql.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('connected again');
  })
}
module.exports.getData = function getData(callback) {
  db.serialize(() => {
    let result = []
    db.each(`SELECT * FROM quotes WHERE quote IN (SELECT quote FROM quotes ORDER BY RANDOM() LIMIT 1)`, (err, row) => {
      if (err) {
        console.log('ERROR' + err);
      }
      console.log(row.quote + " : " + row.author);
      callback(row);
    });
  });
}

module.exports.closeDb = function closeDb() {
  db.close((err) => {
    if (err) {
      console.log(err);
    }
    console.log('Close db connection');
  });
}



