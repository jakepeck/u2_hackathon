const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')
const db = require('./db')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

// Your Code Here
app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

<<<<<<< HEAD
mongodb+srv://conspiracyUser:mongodbY0@hackathon-app.mf9rl.mongodb.net/truthinwineDB?retryWrites=true&w=majority


=======
>>>>>>> 1f47b8ebcdcfda4609e3db39dbaae6e91693a4da
// Your Code Ends Here
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
