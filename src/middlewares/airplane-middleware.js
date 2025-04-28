const {StatusCodes} = require('http-status-codes')

const ErrorResponse = require('../utils/common/error-response')
const { AppError } = require('../utils/errors')

function validateCreateRequest(req,res,next){
    
    if(!req.body.modelNumber){
        ErrorResponse.message = "The airplane creation went wrong!"
        ErrorResponse.error = new AppError(['The modelNumber was either missing or not passed in the correct format in key value pair'], StatusCodes.BAD_REQUEST )
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports =  {
    validateCreateRequest
}