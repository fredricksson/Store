const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
router.post('/', userController.create)
router.post('/auth', userController.authenticate)

module.exports = router