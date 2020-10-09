'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    control: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    }
}, {timestamps: true})

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.methods.comparePassword = function(candidatePassword) {
    if(this.password != null) {
        return bcrypt.compareSync(candidatePassword, this.password)
    } else {
        return false
    }
}

module.exports = mongoose.model('User', UserSchema)