const express = require('express')
const router = express.Router()
const controller = require('../controllers/BlogController')

router.post('/create', controller.create)
router.get('/', controller.index)


module.exports = router