const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

// Your Code Here
app.get('/', (req, res) => {
  console.log('Welcome to the homepage')
  res.send('Welcome to the homepage')
})

app.post('/Order', (req, res) => {
  console.log('Welcome to the homepage')
  res.send('Welcome to the homepage')
})

// Your Code Ends Here
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
