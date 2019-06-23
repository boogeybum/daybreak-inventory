import React from 'react';
import './App.css';
import CustomerForm from "./components/customers/CustomerForm";
import { FormBtn} from "./components/form tools/form"

function App (){
  return (
    <div id ="App">
      <FormBtn data-toggle = "collapse" data-target = "#add-customer" type = "button" style = {{borderBottom: "solid", borderColor: "green"}}>Add Customer <span style = {{paddingLeft: "10px"}}>+</span></FormBtn>
      <br></br>
      <br></br>
      <CustomerForm />
    </div>
  );
}

export default App;
