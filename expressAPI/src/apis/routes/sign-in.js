const express = require('express')
const router = express.Router()
const controller = require('../controllers/SignInController')

router.get('/', controller.index)


module.exports = router