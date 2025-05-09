const {StatusCodes} = require('http-status-codes')
const ErrorResponse = require('../utils/common/error-response')
const SuccessResponse = require('../utils/common/success-response')
const {CityService} = require('../services/')

async function createCity(req,res){
    try {
        const city = await CityService.createCity({
            name: req.body.name 
        })
        SuccessResponse.data = city
        return res.status(StatusCodes.CREATED).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error //embedding the error thrown by service layer in the ErrorResponse object -> the error obj thrown from service layer has a message and a status code. we just put both of these to the error field of the Errorresponse obj
        return res.status(error.statusCode || StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
}

module.exports = {
    createCity
}