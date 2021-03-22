const mongoose = require('mongoose');
const CarModel = require('../models/CarModel');

// Galimos savybės
const availableProps = ['brand', 'model', 'year', 'engineVolume'];
const restrictedProps = ['_id', 'createdAt', 'updatedAt', '__v'];

// Suformuoja tik galimų keisti savybių objektą. 
const createPropsToUpdate = (props) => {
  let propsToChange = {};
  for (const propName in props) {
    if (propName !== undefined && availableProps.includes(propName))
      // if (propName !== undefined && !restrictedProps.includes(propName))
      propsToChange[propName] = props[propName];
  }
  return propsToChange;
}

const getCars = async (req, res) => {
  try {
    const carsFromDB = await CarModel.find();
    res.status(200).json({ cars: carsFromDB });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const postCar = async (req, res) => {
  const { brand, model, year, engineVolume } = req.body;
  try {
    const newCar = await CarModel.create({ brand, model, year, engineVolume });
    res.status(200).json({
      car: {
        id: newCar._id,
        brand: newCar.brand,
        model: newCar.model,
        year: newCar.year,
        engineVolume: newCar.engineVolume
      }
    });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const updateCar = async (req, res) => {
  const { id } = req.params;
  // const propsToUpdate = createPropsToUpdate(req.body);
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new Error(`Neteisingas id '${id}' formatas`);
    const updatedCar = await CarModel.findByIdAndUpdate(id, req.body, { new: true });
    // const updatedCar = await CarModel.findByIdAndUpdate(id, propsToUpdate, { new: true });
    if (updatedCar === null)
      throw new Error(`Nepavyko rasti ir atnaujinti mašinos su id '${id}'`);
    res.status(200).json({
      car: updatedCar
    });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const deleteCar = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new Error(`Neteisingas id '${id}' formatas`);
    const deletedCar = await CarModel.findByIdAndDelete(id);
    if (deletedCar === null)
      throw new Error(`Nepavyko rasti ir ištrinti mašinos su id '${id}'`);
    res.status(200).json({
      car: {
        id: deletedCar._id,
        brand: deletedCar.brand,
        model: deletedCar.model,
        year: deletedCar.year,
        engineVolume: deletedCar.engineVolume
      }
    });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getCars,
  postCar,
  updateCar,
  deleteCar
}