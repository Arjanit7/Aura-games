var cors = require("cors")
const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000, function () {
    console.log('Example app listening on port 3000! ')
    })

var serverangular = {
  origin: "http://localhost:4200"
}

app.use(cors(serverangular));

let con = mysql.createConnection({
host: "10.25.10.21",
user: "g6",
password: "0m0d9QlLkY2BSKc7",
database: "g6"
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
});

app.get('/client/login/:id', function (req, res) {
  req.params.id;
  if (!req.params.id) {
   return res.status(400).send({ error: true, message: 'Please provide user_name' });
  }
  con.query('SELECT email,mdp FROM client where email=?', req.params.id, function (error, results, fields) {
   if (error) throw error;
   res.send(results);
  });
});


app.get('/user/:nom', function (req, res) {
  req.params.nom;
  if (!req.params.nom) {
   return res.status(400).send({ error: true, message: 'Please provide user_name' });
  }
  con.query('SELECT * FROM client where nom=?', req.params.nom, function (error, results, fields) {
   if (error) throw error;
    return res.send({ data: results[0],message: 'users list.' });// le premier resultat --
  });
});

//app.get('/client/:nom', function (req, res) {
  //con.query('select * from client ',params,
  //[req.params.id],
  //function (err, results) {
  //if (err) throw err;
  //res.send(results);
 // });
//});


app.get('/jeu', function (req, res) {
  con.query('SELECT * FROM jeu',
  function (error, results, fields) {
  if (error) throw error;
  res.send(results);
  });
});

app.get('/jeu/img', function (req, res) {
  con.query('SELECT img_jeu FROM jeu',
  function (error, results, fields) {
  if (error) throw error;
  res.send(results);
  });
});

app.get('/jeu/:id', function (req, res) {
  req.params.id;
  if (!req.params.id) {
   return res.status(400).send({ error: true, message: 'Please provide user_name' });
  }
  con.query('SELECT * FROM jeu where id_jeu=?', req.params.id, function (error, results, fields) {
   if (error) throw error;
   res.send(results);
  });
});


app.get('/commentaire/:nom', function (req, res) {
  req.params.nom;
  if (!req.params.nom) {
   return res.status(400).send({ error: true, message: 'Please provide user_name' });
  }
  con.query('SELECT commentaire.texte_commentaire AS com, commentaire.date_commentaire AS date, client.prenom As prenom FROM commentaire LEFT JOIN client ON client.id_client = commentaire.id_client WHERE id_jeu=?', req.params.nom, function (error, results, fields) {
   if (error) throw error;
   res.send(results);
  });
});

app.get('/commentaire', function (req, res) {
  con.query('SELECT * FROM jeu',
  function (error, results, fields) {
  if (error) throw error;
  res.send(results);
  });
});
app.post('/addpersonne', function (req, res) {
  var postData = req.body;
  con.query('INSERT INTO client SET ?', postData,
  function (error, results, fields) {
  if (error) throw error;
  res.send(results);
  });
});

