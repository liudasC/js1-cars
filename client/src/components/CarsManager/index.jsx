import React, { Component } from 'react';

import API from '../../api';
import CarTable from '../CarTable';
import FormCreateCar from '../FormCreateCar';
import styles from './styles.module.css';

export default class CarsManager extends Component {
  state = {
    cars: [],
    editedCarId: null,
    errMsg: null,
  }

  // GET - READ
  fecthCars = () => {
    API.getCars(({ cars }) => this.setState({ cars }), this.displayError)
  }

  // POST - CREATE
  createCar = (data) => {
    API.postCar(data, this.fecthCars, this.displayError);
  }

  editCar = (id) => {
    this.setState({ editedCarId: id === this.state.editedCarId ? null : id });
  }

  // PATCH - UPDATE
  saveCar = (data) => {
    API.updateCar(this.state.editedCarId, data, this.fecthCars, this.displayError);
  }

  // DELETE - DELETE
  deleteCar = (id) => {
    API.deleteCar(id, this.fecthCars, this.displayError)
  }

  displayError = errMsg => {
    console.log(errMsg);
    this.setState({ errMsg });
  }

  componentDidMount() {
    this.fecthCars();
  }

  render() {
    const { editedCarId } = this.state;
    return (
      <div className={styles.Grid}>
        <CarTable
          cars={this.state.cars}
          deleteCar={this.deleteCar}
          editCar={this.editCar}
        />
        <FormCreateCar
          handleSubmit={editedCarId ? this.saveCar : this.createCar}
          isUpdating={Boolean(editedCarId)}
          editedCar={editedCarId ? this.state.cars.find(c => c.id === editedCarId) : null}
        />
      </div>
    )
  }
};
