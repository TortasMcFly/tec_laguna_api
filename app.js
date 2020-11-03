'use strict'

const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')
const api = require('./routes')

app.use(cors())
app.use(bodyparser.urlencoded( {extended: false} ))
app.use(bodyparser.json())
app.use('/api', api)

module.exports = app