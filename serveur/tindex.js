var cors = require("cors")
const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const router = express.Router();

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
host: "10.194.69.15",
user: "g6",
password: "0m0d9QlLkY2BSKc7",
database: "g6"
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
});

//app.get('/client/:nom', function (req, res) {
  //con.query('select * from client ',params,
  //[req.params.id],
  //function (err, results) {
  //if (err) throw err;
  //res.send(results);
 // });
//});

/*app.post('/addPerson', function (req, res) {
  var postData = req.body;
  con.query('INSERT INTO client SET ?', postData,
  function (error, results, fields) {
  if (error) throw error;
  res.send(results);
  });
});
*/

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


function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}


router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})

router.post('/AddPerson', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})

module.exports = router;
