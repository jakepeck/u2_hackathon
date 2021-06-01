const mongoose = require('mongoose')
<<<<<<< HEAD
require('dotenv').config()

let MONGODB_URI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI 
: 'mongodb://127.0.0.1:27017/todo_tracker'
=======
require('dotenv').config() // Add this line

let MONGODB_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/menuDatabase'
>>>>>>> 1f47b8ebcdcfda4609e3db39dbaae6e91693a4da

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
