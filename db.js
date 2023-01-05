/* eslint-disable prettier/prettier */


// const mysql = require('mysql');
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'aam app',
// });



// module.exports = db;

const mysql = require('mysql');

const connection = mysql.createConnection({
  // host: 'localhost',
  // database: 'aam',
  // user: 'root',
  // password: '',
  host: '172.17.0.2',
  database: 'aam',
  user: 'root',
  password: 'Sac@123',
});

connection.connect(function (error) {
  if (error) {
    throw error;
  }
  else {
    console.log('MySQL Database is connected Successfully');
  }
});

module.exports = connection;








