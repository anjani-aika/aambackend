const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var database = require('./db');
const connection = require('./db');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const cors=require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
// MySQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aam',
  });

  app.get('/acco',(req,res)=>{

    // var user_email_address = req.body.user_email_address;

    pool.getConnection((err,connection)=>{
        if(err) throw err
       // console.log(`connected as id ${connection.threadId}`)

       //query(sqlString,callback)
    //    where = 'email = ?';
    //    values = user_email_address ;
       var sql = 'SELECT * FROM acco' ;
       connection.query(sql,(err,rows)=>{
       connection.release();
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
       })


    })
  })

  //get data by id
//   app.get('/:id',(req,res)=>{

//     pool.getConnection((err,connection)=>{
//         if(err) throw err
//        console.log(`connected as id ${connection.threadId}`)

//        //query(sqlString,callback)
//        connection.query('SELECT * from aam___sheet1 WHERE id=?' ,[req.params.id],(err,rows)=>{

//         if(!err){
//             res.send(rows)
//         }else{
//             console.log(err)
//         }
//        })


    // })
//   })

app.listen(port, () => console.log(`Listening on port ${port}`));

