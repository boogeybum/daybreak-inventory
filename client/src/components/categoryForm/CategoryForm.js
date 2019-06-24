import React, { Component } from "react";
import { Input, FormBtn, FormRow } from "../form tools/form";

function CategoryForm(props) {
  return(
    <div id="add-category" className="collapse">
      <h3>Item Category</h3>
        <form id="itemCategory">
          <FormRow>
          <Input name="categoryInput" colSpecs = "form-group col-sm-4" placeholder="Enter Category" id = "categoryInput" labelText = "Enter item category:" />
          {/* <label htmlFor="categoryInput" form="itemCategory">Enter item category:</label>
          <br></br>
          <input type="text" name="categoryInput" id="categoryInput" form="itemCategory" onChange={(e) => props.handleChange(e)} placeholder="Enter Category" required/>
          <br></br>
          <button type="submit" onClick={(e) => props.handleSubmitClick(e)}>Submit</button> */}
          </FormRow>
          <FormBtn type = "submit" btnDetails = {"btn btn-success"} >Submit</FormBtn>
        </form>
    </div>
  );
}

export default CategoryForm;