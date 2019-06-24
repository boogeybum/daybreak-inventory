import React, { Component } from 'react';
// Uncomment after creating the corresponding files
import CategoryForm from "../components/categoryForm/CategoryForm";
// import API from "..utils/API";

class itemCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.this.state = {
      itemCategory: '',
    };

    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const itemCategory = target.itemCategory;

    this.setState({ value : event.target.value });
  }

  render() {
    return (
      <main>
        <CategoryForm />
      <form onSubmit = {this.handleSubmit}>
        <label>
          Item Category:
          <input
            name = "itemCategory"
            type = "text"
            value = {this.state.itemCategory}
            onChange = {this.handleInputChange} 
          />
        </label>
        <input 
          type = "submit" 
            value = "Submit" 
          />

      </form>
      </main>
    );
  }
}

export default itemCategoryForm;