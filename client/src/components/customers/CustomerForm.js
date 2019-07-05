import React, { Component } from "react";
import { Input, FormBtn, FormRow } from "../form tools/form";
import API from "../../utils/API";

class CustomerForm extends Component {
    // setting a state representing customer details
    state = {
        customers: [],
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        phone: ""
    };

    componentDidMount() {
        this.loadCustomers();
    }

    loadCustomers = () => {
        API.getCustomers()
            .then(res =>
                this.setState({ customers: res.data })
            )
            .catch(err => console.log(err));
    };

    saveCustomer = (customerData) => {
        API.saveCustomer(customerData)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstname && this.state.lastname && this.state.email && this.state.address) {
            API.saveCustomer({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container customer">
                <h3 className="display-4">Customers</h3>
                {/* button that toggles a form to add a new customer */}
                <FormBtn data-toggle="collapse" data-target="#add-customer" type="button" style={{ borderBottom: "solid", borderColor: "green" }}>Add Customer <span style={{ paddingLeft: "10px" }}>+</span></FormBtn>

                {/* form to add a new customer */}
                <div
                    id="add-customer"
                    className="collapse"
                >
                    <form>
                        <FormRow>
                            <Input name="firstname" colspecs="form-group col-sm-4" placeholder="First Name (required)" id="title" labeltext="First name" value={this.state.firstname}
                                onChange={this.handleInputChange} />
                            <Input name="lastname" placeholder="Last Name (required)" colspecs="form-group col-sm-4" id="last-name" labeltext="Last name" value={this.state.lastname}
                                onChange={this.handleInputChange} />
                            <Input name="email" placeholder="enter email" colspecs="form-group col-sm-4" id="email" labeltext="Email" type="email" value={this.state.email}
                                onChange={this.handleInputChange} />
                        </FormRow>
                        <Input name="address" placeholder="Street, City, State, Country (required)" colspecs="form-group col-sm-12" id="address" labeltext="Address" value={this.state.address}
                            onChange={this.handleInputChange} />
                        <Input name="phone" placeholder="phone (required)" colspecs="form-group col-sm-12" id="phone" labeltext="phone" value={this.state.phone}
                            onChange={this.handleInputChange} />
                        <FormBtn type="submit" btndetails={"btn btn-success"}
                            disabled={!(this.state.firstname && this.state.lastname && this.state.email && this.state.address)}
                            onClick={this.handleFormSubmit}>Submit</FormBtn>
                    </form>
                </div>
                <p></p>
                {/* Table for existing customers in the database */}
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((customer,index) =>(
                            <tr key={index}>
                                <th scope="row">{customer.id}</th>
                                <td>{customer.firstname}</td>
                                <td>{customer.lastname}</td>
                                <td>{customer.email}</td>
                                <td>{customer.address}</td>
                                <td>{customer.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
            </div>
        );
    }
}

export default CustomerForm;