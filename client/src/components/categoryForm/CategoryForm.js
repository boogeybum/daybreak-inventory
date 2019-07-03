import React, { Component } from 'react';
import { Input, FormBtn,  FormRow } from '../form tools/form';

class CategoryForm extends Component {
  render() {
// function CategoryForm(props) {
    return (
      <div className="container categories">
      <h3 className="display-4">Item Category</h3>
      <FormBtn data-toggle="collapse" data-target="#add-category" type="button" style={{ borderBottom: "solid", borderColor: "green" }}>Add Item Category <span style={{ paddingLeft: "10px" }}>+</span></FormBtn>
      
      <div id='add-category' className="collapse">
      
        <form id='itemcategories'>
          <FormRow>
            <Input
              name='itemcategoriesInput'
              colSpecs='form-group col-md'
              placeholder='Enter Category'
              id='itemcategoriesInput'
              labeltext='Enter item category:'
              // onChange={(e) => props.handleChange(e)}
              />
          </FormRow>
          <FormBtn type='submit' btnDetails={'btn btn-success'} labeltext='Submit'
          // disabled={!(this.state.itemcategoriesInput)}
          // onClick={(this.handleSubmitClick)}
          // onClick={(e) => props.handleSubmitClick(e)}
          >
            Submit
          </FormBtn>
        </form>
      </div>
    </div>  
    );
  }
}

export default CategoryForm;
