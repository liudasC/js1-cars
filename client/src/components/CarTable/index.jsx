import React, { Component } from 'react';
import styles from './styles.module.css';

export class CarTable extends Component {

  createDataRows = (cars) =>
    cars.map(({ id, brand, model, year, engineVolume }) => (
      <tr key={id}>
        <td>{brand}</td>
        <td>{model}</td>
        <td>{year}</td>
        <td>{engineVolume}</td>
        <td>
          <button className={styles.Button} onClick={() => this.props.editCar(id)}>Update</button>
          <button className={styles.Button} onClick={() => this.props.deleteCar(id)}>Delete</button>
        </td>
      </tr>
    ))

  render() {
    const { cars } = this.props;
    const rows = this.createDataRows(cars);
    return (
      <div>
        { cars.length === 0
          ? <h2>Nėra mašinų</h2>
          : <table className={styles.Table}>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Engine Volume</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        }
      </div>
    )
  }
}

export default CarTable;
