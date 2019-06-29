import React, { Component } from 'react';
import { Input, FormBtn,  FormRow, FormContainer } from '../form tools/form';

class CategoryForm extends Component {
  render() {
    return (
      <FormContainer id='add-category'>
        <h3>Item Category</h3>
        <form id='itemcategories'>
          <FormRow>
            <Input
              name='itemcategoriesInput'
              colSpecs='form-group col-md'
              placeholder='Enter Category'
              id='itemcategoriesInput'
              labelText='Enter item category:'
            />
          </FormRow>
          <FormBtn type='submit' btnDetails={'btn btn-success'} labelText='Submit'>
            Submit
          </FormBtn>
        </form>
      </FormContainer>
    );
  }
}

export default CategoryForm;
