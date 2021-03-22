const CarModel = require("../models/CarModel")

const getCars = async (req, res) => {
    try {
        const carsFromDb = awaitCarModel.find();
        res.status(200).json({ cars: carsFromDB })
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const postCar = async (req, res) => {
    res.status(200).json("ateityje idesiu 1 masina")
}

const updateCar = async (req, res) => {
    res.status(200).json("ateityje atnaujinsiu 1 masina")
}

const deleteCar = async (req, res) => {
    res.status(200).json("ateityje istrinsiu 1 masina")
}

module.exports = {
    getCars,
    postCar,
    updateCar,
    deleteCar
}