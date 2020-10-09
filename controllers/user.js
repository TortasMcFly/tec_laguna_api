'use strict'

const User = require('../models/user')
const jwtService = require('../services/jwt_service')

function signUp(req, res)
{
    const body = req.body
    const user = new User({
        name: body.name,
        lastname: body.lastname,
        control: body.control,
        phone: body.phone
    })

    user.password = user.generateHash(body.password)
    user.save((err) => {
        if( err ) return res.status(500).send({ message: err })
        
        res.status(200).send({ token: jwtService.createToken(user) })
    })
}

function signIn(req, res)
{
    const body = req.body
    User.findOne({ control: body.control }, (err, user) => {
        if(err) return res.status(500).send({message: err})
        if(!user) return res.status(404).send({message: 'No se encontró un usuario asociado a ese email'})

        const isValid = user.comparePassword(body.password)
        if(isValid) {
            req.user = user
            res.status(200).send({
                token: jwtService.createToken(user)
            })
        }
        else{
            res.status(404).send({message: 'Contraseña incorrecta'})
        }
    })
}

function getUserInfo(req, res)
{
    let user_id = req.user
    User.findById(user_id, (err, user) => {

        if(err) return res.status(500).send({message: err})
        if(!user) return res.status(404).send({message: 'No se encontró al usuario'})

        res.status(200).send(user)

    })
}

module.exports = {
    signUp,
    signIn,
    getUserInfo
}