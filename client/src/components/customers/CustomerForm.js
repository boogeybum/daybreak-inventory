import React, { Component } from "react";
import { Input, TextArea, FormBtn, FormRow } from "../form tools/form";
import API from "../../utils/API";

class CustomerForm extends Component {
    // setting a state representing customer details
    state = {
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        phone: ""
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
            <div
                id="add-customer"
                // className="collapse"
            >
                <form>
                    <FormRow>
                        <Input name="firstname" colSpecs="form-group col-sm-4" placeholder="First Name (required)" id="title" labelText="First name" value={this.state.firstname}
                            onChange={this.handleInputChange} />
                        <Input name="lastname" placeholder="Last Name (required)" colSpecs="form-group col-sm-4" id="last-name" labelText="Last name" value={this.state.lastname}
                            onChange={this.handleInputChange} />
                        <Input name="email" placeholder="enter email" colSpecs="form-group col-sm-4" id="email" labelText="Email" type="email" value={this.state.email}
                            onChange={this.handleInputChange} />
                    </FormRow>
                    <Input name="address" placeholder="Street, City, State, Country (required)" colSpecs="form-group col-sm-12" id="address" labelText="Address" value={this.state.address}
                        onChange={this.handleInputChange} />
                    <Input name="phone" placeholder="phone (required)" colSpecs="form-group col-sm-12" id="phone" labelText="phone" value={this.state.phone}
                        onChange={this.handleInputChange} />
                    <FormBtn type="submit" btnDetails={"btn btn-success"}
                        disabled={!(this.state.firstname && this.state.lastname && this.state.email && this.state.address)}
                        onClick={this.handleFormSubmit}>Submit</FormBtn>
                </form>
            </div>
        );
    }
}

export default CustomerForm;