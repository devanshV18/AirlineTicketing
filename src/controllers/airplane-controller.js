const {StatusCodes} = require('http-status-codes')
const ErrorResponse = require('../utils/common/error-response')
const SuccessResponse = require('../utils/common/success-response')
const {AirplaneService} = require('../services/')

async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity 
        })
        SuccessResponse.data = airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error //embedding the error thrown by service layer in the ErrorResponse object -> the error obj thrown from service layer has a message and a status code. we just put both of these to the error field of the Errorresponse obj
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function getAirplanes(req,res){
    try {
        const airplanes = await AirplaneService.getAirplanes()
        SuccessResponse.data = airplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        res.status(error.statusCode).json(ErrorResponse)
    }
}


// route -> /api/v1/airplanes/:id
async function getAirplaneById(req,res){
    try {
        const airplane = await AirplaneService.getAirplaneById(req.params.id)
        SuccessResponse.data = airplane
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports = {
    createAirplane, getAirplanes,getAirplaneById
}