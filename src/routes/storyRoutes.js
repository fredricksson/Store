const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')
const storyController = require('../controllers/storyController')

router.use(authMiddleware)

router.post('/', storyController.create )
router.put('/:id', storyController.update )
router.get('/', storyController.findStoriesByUser)
router.delete('/:id', storyController.delete)
module.exports = router