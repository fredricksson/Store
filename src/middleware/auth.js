const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')
module.exports = (req, res, next) => {
    const authHeaders = req.headers.authorization
    if (!authHeaders)
        return res.send({error: true, status: 401, message: 'No token provided', data: []})

    const parts = authHeaders.split(' ')
    if (!parts.length == 2)
        return res.send({error: true, status: 401, message: 'Token error', data: []})
    
    const [ scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) 
        return res.send({error: true, status: 401, message: 'Token malformatted', data: []})
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err)  return res.send({error: true, status: 401, message: 'Invalid token', data: []})

        req.userId = decoded.id
        return next()

    })
    

}