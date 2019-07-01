import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Color:
          <input
            name="color"
            type="text"
            value={this.state.color}
            onChange={this.handleInputChange}
          />
          count:
          <input
            name="count"
            type="text"
            value={this.state.count}
            onChange={this.handleInputChange}
          />
          date Purchased:
          <input
            name="datePurchased"
            type="text"
            value={this.state.datePurchased}
            onChange={this.handleInputChange}
          />
          purchase price:
          <input
            name="purchasePrice"
            type="number"
            value={this.state.purchasePrice}
            onChange={this.handleInputChange}
          />
          seller:
          <input
            name="seller"
            type="text"
            value={this.state.seller}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
