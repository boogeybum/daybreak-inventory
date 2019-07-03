import React, { Component } from 'react';
// Uncomment after creating the corresponding files
import CategoryForm from "../components/categoryForm/CategoryForm";
import CategoryResults from "../components/categoryForm/CategoryResults";
import API from '../utils/API';

class ItemCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCategoryInput: '',
      itemCategoryData: ''
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    // const target = event.target;
    // const itemcategories = target.itemcategories;

    this.setState({ itemCategoryInput : event.target.value });
    console.log(`item category input is ${this.state.itemCategoryInput}`);
    console.log(`item category data is ${this.state.itemCategoryData}`);

  }

  handleSubmitClick(event) {
    event.preventDefault();
    API.addCategoryToDB(this.state.itemCategoryInput)
    .then(
      (response) => {
        this.setState({ itemCategoryData: response.data });
        this.setState({ itemCategoryInput: "" });
  });
  }

  render() {
    return (
      <main>
        <CategoryForm handleChange={this.handleChange} handleSubmitClick={this.handleSubmitClick} />
        {(this.state.itemCategoryData.length > 0)?
          <CategoryResults itemCategoryData={this.state.itemCategoryData} path={this.props.match.path}/> : null
        }
      </main>
    );
  }
}

export default ItemCategoryForm;