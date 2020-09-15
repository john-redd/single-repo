const express = require('express')
const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/client/build'))

app.get('/api', (req, res) => res.status(200).send('API ready'))

app.get('*', (req, res) =>
  res.sendFile(require('path').join(__dirname, '/client/build/index.html'))
)

app.listen(PORT, () => console.log('Server running'))
