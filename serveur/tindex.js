const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000, function () {
    console.log('Example app listening on port 3000! ')
    })

let con = mysql.createConnection({
host: "10.194.69.15",
user: "g6",
password: "0m0d9QlLkY2BSKc7",
database: "g6"
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
});

app.get('/client/:nom', function (req, res) {
  con.query('select * from client ',params
  [req.params.id],
  function (err, results) {
  if (err) throw err;
  res.send(results);
  });
});

app.post('/addPerson', function (req, res) {
  var postData = req.body;
  con.query('INSERT INTO person SET ?', postData,
  function (error, results, fields) {
  if (error) throw error;
  res.send(results);
  });
});

app.get('/user/:nom', function (req, res) {
  req.params.nom;
  if (!req.params.nom) {
   return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  con.query('SELECT * FROM client where nom=?', req.params.nom, function (error, results, fields) {
   if (error) throw error;
    return res.send({data: results[0], message: 'users list.' });// le premier resultat
  });
});
