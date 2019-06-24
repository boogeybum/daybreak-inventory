import React from "react";

function CategoryForm(props) {
  return(
    <div id="itemCategoryContainer">
      <h3>Item Category</h3>
        <form id="itemCategory">
          <label htmlFor="categoryInput" form="itemCategory">Enter item category:</label>
          <br></br>
          <input type="text" name="categoryInput" id="categoryInput" form="itemCategory" onChange={(e) => props.handleChange(e)} placeholder="Enter Category" required/>
          <br></br>
          <button type="submit" onClick={(e) => props.handleSubmitClick(e)}>Submit</button>
        </form>
    </div>
  );
}

export default CategoryForm;