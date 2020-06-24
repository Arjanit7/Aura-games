const express = require ("express")
const app = express()

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

//routes
app.get('/', (request, response) => {
  response.render('index.ejs', {name : 'kyle'})
})

app.get('/login', (request, response) => {
  response.render('login.ejs')
})
app.get('/register', (request, response) => {
  response.render('register.ejs')
})

app.post("/register", (request, response) =>{ // lorsqu'un utilisateur veut s'incrire
  request.body.name
} )

app.listen(3000)
