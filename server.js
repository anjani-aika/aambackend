/* eslint-disable prettier/prettier */
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var database = require('./db');
const app = express();
const router = express.Router();
var admin = require('firebase-admin');
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

var serviceAccount = require('./sac-app-5d1f8-firebase-adminsdk-s6o4n-1d16ef6cd5.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aam_app',
});

// Get all beers
app.get('/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      throw err;
    }
    console.log('connected');
    connection.query('SELECT * FROM loginn', (err, rows) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }

      // if(err) throw err
      console.log('The data from table are: \n', rows);
    });
  });
});

app.post('/loginn', function (request, response, next) {
  var email = request.body.email;

  var dob = request.body.dob;
  // var loginName = 'loginn data';
  if (email && dob) {
    let query = `
    SELECT * FROM loginn
    WHERE email = "${email}"
    `;

    database.query(query, function (error, data) {
      console.log(data);
      if (data) {
        for (var count = 0; count < data.length; count++) {
          console.log(data[count].dob);
          if (data[count].dob == dob) {
            // request.session.user_id = data[count].user_id;

            // response.redirect("/");
            response.send(data);
          } else {
            response.send('Incorrect Password');
          }
        }
      } else {
        response.send('Incorrect Email Address');
      }
      response.end();
    });
  } else {
    response.send('Please Enter Email Address and Password Details');
    response.end();
  }
});

app.post('/send-noti', (req, res) => {
  console.log(req.body);

  // console.log(req.body.n
  // console.log(req.titleN)
  //    const message = {
  //     notification:{
  //         title:"new ad",
  //         body:"new ad posted click to open"
  //     },
  //     tokens:req.body.tokens
  // }
  // const message = {
  //     notification:{
  //         title:"new Notification",
  //         body:"new ad posted"
  //     },
  //     token:'fGgVuiogRJq9RKUc1cLLNH:APA91bGJsrpbLLnUKDIkXD5LYVCxWFl8Jv5kkGPlUwR1RSXhCpmgwh6x3OLNFzZA5SZAGUG5qjeh0oh30HribpHhpLBQ8xOTLkvSqsb2xZChqAtoT3MG6rqSgfiDijpJDVNRozi4CCAy'
  // }
  // admin.messaging().send(message).then(res=>{
  //     console.log("send success")
  // }).catch(err=>{
  //     console.log(err)
  // })
  for (var count = 0; count < req.body.tokens.length; count++) {
    const message = {
      notification: {
        title: req.body.title,
        body: req.body.subTitle,
      },
      token: req.body.tokens[count],
    };
    admin
      .messaging()
      .send(message)
      .then(res => {
        console.log('send success');
      })
      .catch(err => {
        console.log(err);
      });
  }
});

app.post('/profile', (req, res) => {
  var email = req.body.email;
  //console.log(email);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log(`connected as id ${connection.threadId}`)

    //query(sqlString,callback)
    //    where = 'email = ?';
    //    values = email ;
    var sql = 'SELECT * FROM loginn WHERE email=?';
    connection.query(sql, [email], (err, rows) => {
      if (!err) {
        //console.log('roes', rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
