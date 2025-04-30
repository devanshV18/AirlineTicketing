const { AirplaneRepository } = require('../repositories'); // Import the AirplaneRepository
const { AppError } = require('../utils/errors');
const {StatusCodes} = require('http-status-codes')

const airplaneRepository = new AirplaneRepository(); // Create an instance

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
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
        throw new AppError("Something went wrong in the service layer", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplanes(){
    try {
        const airplanes = await airplaneRepository.getAll()
        return airplanes
    } catch (error) {
        throw new AppError("Cannot fetch airplanes from the database!", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirplane, getAirplanes
};
