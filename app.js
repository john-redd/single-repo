require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = process.env
const session = require('express-session')

app.use(express.json())

app.use(express.static(__dirname + '/client/build'))

app.use(
  session({
    secret: 'alksdjf;alksdjfa;lksdjf;aklsdfj;as',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 60 * 24
    }
  })
)

app.get('/api', (req, res) => res.status(200).send('API ready'))

app.get('*', (req, res) =>
  res.sendFile(require('path').join(__dirname, '/client/build/index.html'))
)

app.listen(PORT, () => console.log('Server running'))
