import React from 'react';
import './App.css';
import CustomerForm from "./components/customers/CustomerForm";
import CategoryForm from "./components/categoryForm/CategoryForm";
import { FormBtn} from "./components/form tools/form";

function App (){
  return (
    <div id ="App">
      <FormBtn data-toggle = "collapse" data-target = "#add-customer" type = "button" style = {{borderBottom: "solid", borderColor: "green"}}>Add Customer <span style = {{paddingLeft: "10px"}}>+</span></FormBtn>
      <CustomerForm />
      <br></br>
      
      <FormBtn data-toggle = "collapse" data-target = "#add-category" type = "button" style = {{borderBottom: "solid", borderColor: "green"}}>Add Item Category <span style = {{paddingLeft: "10px"}}>+</span></FormBtn>
      <CategoryForm />
      <br></br>
    </div>
  );
}

export default App;
