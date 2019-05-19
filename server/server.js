const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express()

app.use(bodyParserjson())

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))

const mongoURI = 'mongodb://localhost:27071/mernloginreg'

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connection"))
    .catch(err => console.log(err))

const Users = require('./routes/Users')

app.listen(PORT, () => {
    console.log("Serevr is running on port: " + PORT)
})