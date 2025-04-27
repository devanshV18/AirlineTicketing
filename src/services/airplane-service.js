const { AirplaneRepository } = require('../repositories'); // Import the AirplaneRepository

const airplaneRepository = new AirplaneRepository(); // Create an instance

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.error('Error creating airplane:', error); // Optional console log
        throw error; // Corrected throw
    }
}

module.exports = {
    createAirplane
};
