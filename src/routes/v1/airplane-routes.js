const express = require('express')
const {AirplaneController} = require('../../controllers')
const { validateCreateRequest } = require('../../middlewares/airplane-middleware')
const router = express.Router()

// /api/v1/airplanes
router.post('/', validateCreateRequest, AirplaneController.createAirplane)

module.exports = router

