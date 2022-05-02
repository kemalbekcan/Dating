const express = require('express')
const app = express()
const dotenv = require('dotenv')
var cors = require('cors')
// const bodyParser = require('body-parser')

var users = require('./routes/users')

app.use(cors())

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', users);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})