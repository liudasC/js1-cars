import React, { Component } from 'react';
import InputGroup from '../InputGroup';

export class FormCreateCar extends Component {
  state = {
    brand: '',
    model: '',
    year: '',
    engineVolume: '',
    isUpdating: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { brand, model, year, engineVolume } = this.state;
    this.props.handleSubmit({
      brand,
      model,
      year: Number(year),
      engineVolume: Number(engineVolume)
    });
    this.setState({
      brand: '',
      model: '',
      year: '',
      engineVolume: ''
    })
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isUpdating !== state.isUpdating) {
      return {
        brand: props.editedCar?.brand ?? '',
        model: props.editedCar?.model ?? '',
        year: props.editedCar?.year ?? '',
        engineVolume: props.editedCar?.engineVolume ?? '',
        isUpdating: props.isUpdating
      }
    }
    return null;

  }

  render() {
    const { brand, model, year, engineVolume, isUpdating } = this.state;
    const actionName = (isUpdating ? 'Update' : 'Create') + ' Car';

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{actionName}</h3>
        <InputGroup
          name="brand"
          value={brand}
          handleChange={(brand) => this.setState({ brand })}
        />
        <InputGroup
          name="model"
          value={model}
          handleChange={(model) => this.setState({ model })}
        />
        <InputGroup
          name="year"
          value={year}
          handleChange={(year) => this.setState({ year })}
        />
        <InputGroup
          name="engineVolume"
          value={engineVolume}
          handleChange={(engineVolume) => this.setState({ engineVolume })}
        />
        <button>{actionName}</button>
      </form>
    )
  }
}

export default FormCreateCar