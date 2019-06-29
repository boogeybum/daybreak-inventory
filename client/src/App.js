import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import LotForm from "./components/LotForm";
import itemscategoriesForm from "./pages/itemCategoryForm";
// import InventoryForm from "./components";
// import UsersForm from "./components";
import CustomerForm from "./components/customers/CustomerForm";
// import CheckoutForm from "./components";
// import { FormBtn } from "./components/form tools/form";
import Header from "./components/navigation/Header";
import Nav from "./components/navigation/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Nav />
          <Switch>
            {/* <Route exact path="/lots" component={LotForm}/> */}
            <Route exact path="/itemcategories" component={itemscategoriesForm}/>
            {/* <Route exact path="/inventory" component={InventoryForm}/> */}
            {/* <Route exact path="/users" component={UsersForm}/> */}
            <Route exact path="/customers" component={CustomerForm}/>
            {/* <Route exact path="/checkout" component={CheckoutForm}/> */}
          </Switch>
          
          {/* <div id ="App">
            <FormBtn data-toggle = "collapse" data-target = "#add-customer" type = "button" style = {{borderBottom: "solid", borderColor: "green"}}>Add Customer <span style = {{paddingLeft: "10px"}}>+</span></FormBtn>
            <CustomerForm />
            <br></br>
            
            <FormBtn data-toggle = "collapse" data-target = "#add-category" type = "button" style = {{borderBottom: "solid", borderColor: "green"}}>Add Item Category <span style = {{paddingLeft: "10px"}}>+</span></FormBtn>
            <CategoryForm />
            <br></br> 
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
