'use strict'

const express = require('express')
const auth = require('../middlewares/auth')
const UsersController = require('../controllers/user')
const api = express.Router()

api.post('/signup', UsersController.signUp)
api.post('/signin', UsersController.signIn)

api.get('/v1/user', auth, UsersController.getUserInfo)

module.exports = api