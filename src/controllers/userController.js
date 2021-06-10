const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

function generateToken (params = {} ) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: '5m'
    })
}

exports.create = async (req, res) => {
    const { username, password } = req.body
    const errors = []
    if (username === undefined) 
        errors.push('username is required')
    if (password === undefined)
        errors.push('password is required')
    if (errors.length)
      return res.send({ error: true, status: 400, message: "invalid fields", data: errors })

    try {
        if( await User.findOne({username}))
          return res.send({ error: true, status: 400, message: "Usuario does not exist", data: [] })
        
        const user = await User.create({username, password})
        user.password = undefined
        res.send({ error: false, status: 201, message: "New user created!", data: {user: user, token: generateToken({id: user.id})} })
    } catch (error) {
        console.log(error);
        res.send({ error: true, status: 500, message: "internal erro server ", data: [] })
    }
}

exports.authenticate = async (req, res) => {
    try {
        const { username, password} = req.body
        const errors = []
        if (username === undefined) 
            errors.push('username is required')
        if (password === undefined)
            errors.push('password is required')
        if (errors.length)
        return res.send({ error: true, status: 400, message: "invalid fields", data: errors })
        const user = await User.findOne({ username })
    
        if (!user) return res.send({ error: true, status: 404, message: "User not found!", data: [] })

        if (!await bcrypt.compare(password, user.password)) return res.send({ error: true, status: 400, message: "Senha invalida", data: [] })
    
        user.password = undefined
        res.send({ error: false, status: 200, message: "sucess!", data: { user, token: generateToken({id: user.id}) }})
    } catch (error) {
        console.log(error);
        res.send({ error: true, status: 500, message: "erro interno reporte o erro", data: [] })
    }
}
