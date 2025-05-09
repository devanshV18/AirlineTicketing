const {StatusCodes} = require('http-status-codes')
const {CityRepository} = require('../repositories')
const {AppError} = require('../utils/errors')

const cityRepository = new CityRepository()

async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            console.log("Error obj", error)
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            console.log("Error array", explanation)
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Something went wrong in the city-service layer", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createCity
}