const { Router } = require('express');
const {
  getCars,
  postCar,
  updateCar,
  deleteCar
} = require('../controllers/cars');

const router = Router();

router.get('/', getCars);

router.post('/', postCar);

router.patch('/:id', updateCar);

router.delete('/:id', deleteCar);

module.exports = router;