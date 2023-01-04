const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var database = require('./db');
const connection = require('./db');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
//const cors=require('cors')

// app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// MySQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aam',
  });

  //get all datas



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
ᐧ