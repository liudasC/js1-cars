

const getCars = (req, res) => {
    res.status(200).json("ateityje grazinsiu masinas")
}

const postCar = (req, res) => {
    res.status(200).json("ateityje idesiu 1 masina")
}

const updateCar = (req, res) => {
    res.status(200).json("ateityje atnaujinsiu 1 masina")
}

const deleteCar = (req, res) => {
    res.status(200).json("ateityje istrinsiu 1 masina")
}

module.exports = {
    getCars,
    postCar,
    updateCar,
    deleteCar
}