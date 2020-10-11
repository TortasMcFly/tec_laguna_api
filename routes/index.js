'use strict'

const express = require('express')
const auth = require('../middlewares/auth')
const UsersController = require('../controllers/user')
const MateriasController = require('../controllers/materias')
const api = express.Router()

api.post('/signup', UsersController.signUp)
api.post('/signin', UsersController.signIn)

api.get('/v1/user', auth, UsersController.getUserInfo)
api.get('/v1/kardex', auth, MateriasController.getKardex)
api.get('/v1/carga', auth, MateriasController.getCargaAcademica)

module.exports = api