import React, { Component } from 'react';
import { Input, FormBtn, FormRow } from '../form tools/form';

class CategoryForm extends Component {
  render() {
    return (
      <div id='add-category' className='collapse'>
        <h3>Item Category</h3>
        <form id='itemCategory'>
          <FormRow>
            <Input
              name='categoryInput'
              colSpecs='form-group col-sm-4'
              placeholder='Enter Category'
              id='categoryInput'
              labelText='Enter item category:'
            />
          </FormRow>
          <FormBtn type='submit' btnDetails={'btn btn-success'}>
            Submit
          </FormBtn>
        </form>
      </div>
    );
  }
}

export default CategoryForm;
