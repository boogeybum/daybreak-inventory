import React, { Component } from 'react';
// Uncomment after creating the corresponding files
import CategoryForm from "../components/categoryForm/CategoryForm";
import CategoryResults from "../components/categoryForm/CategoryResults";
import API from '../utils/API';

class itemcategoriesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemcategoriesInput: '',
      itemcategoriesData: ''
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    // const target = event.target;
    // const itemcategories = target.itemcategories;

    this.setState({ itemcategoriesInput : event.target.value });
    console.log(`item category input is ${this.state.itemcategoriesInput}`);
    console.log(`item category data is ${this.state.itemcategoriesData}`);

  }

  handleSubmitClick(event) {
    event.preventDefault();
    API.addCategoryToDB(this.state.itemcategoriesInput)
    .then(
      (response) => {
        this.setState({ itemcategoriesData: response.data });
        this.setState({ itemcategoriesInput: "" });
  });
  }

  render() {
    return (
      <main>
        <CategoryForm handleChange={this.handleChange} handleSubmitClick={this.handleSubmitClick} />
        {(this.state.itemcategoriesData.length > 0)?
          <CategoryResults itemcategoriesData={this.state.itemcategoriesData} path={this.props.match.path}/> : null
        }
      </main>
    );
  }
}

export default itemcategoriesForm;