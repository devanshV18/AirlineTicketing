const express = require('express')
const {AirplaneController} = require('../../controllers')
const {AirplaneMiddleware} = require('../../middlewares')
const router = express.Router()

// /api/v1/airplanes
router.post('/', AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane)

router.get('/', AirplaneController.getAirplanes)

router.get('/:id', AirplaneController.getAirplaneById)

router.delete('/:id', AirplaneController.destroyAirplaneById)

module.exports = router

