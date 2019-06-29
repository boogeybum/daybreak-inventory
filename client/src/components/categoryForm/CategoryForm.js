import React, { Component } from 'react';
import { Input, FormBtn, FormRow } from '../form tools/form';

class CategoryForm extends Component {
  render() {
    return (
      <div id='add-category'>
        <h3>Item Category</h3>
        <form id='itemcategories'>
          <FormRow>
            <Input
              name='itemcategoriesInput'
              colSpecs='form-group col-sm-4'
              placeholder='Enter Category'
              id='itemcategoriesInput'
              labelText='Enter item category:'
            />
          </FormRow>
          <FormBtn type='submit' btnDetails={'btn btn-success'} labelText='Submit'>
            Submit
          </FormBtn>
        </form>
      </div>
    );
  }
}

export default CategoryForm;
