import React, { Component } from "react";
import { Input, TextArea, FormBtn, FormRow } from "../form tools/form";
import API from "../../utils/API";

class CustomerForm extends Component {
    // setting a state representing customer details
    state = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        note: ""
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
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.address) {
            API.saveCustomer({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                address: this.state.address,
                notes: this.state.note
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
                        <Input name="firstName" colSpecs="form-group col-sm-4" placeholder="First Name (required)" id="title" labelText="First name" value={this.state.firstName}
                            onChange={this.handleInputChange} />
                        <Input name="lastName" placeholder="Last Name (required)" colSpecs="form-group col-sm-4" id="last-name" labelText="Last name" value={this.state.lastName}
                            onChange={this.handleInputChange} />
                        <Input name="email" placeholder="enter email" colSpecs="form-group col-sm-4" id="email" labelText="Email" type="email" value={this.state.email}
                            onChange={this.handleInputChange} />
                    </FormRow>
                    <Input name="address" placeholder="Street, City, State, Country (required)" colSpecs="form-group col-sm-12" id="address" labelText="Address" value={this.state.address}
                        onChange={this.handleInputChange} />
                    <TextArea name="notes" placeholder="Add some notes about the customer (Optional)" rows="5" id="notes" className={"form-group col-sm-12 rounded"} labelText="Add notes" value={this.state.notes}
                        onChange={this.handleInputChange} />
                    <FormBtn type="submit" btnDetails={"btn btn-success"}
                        disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.address)}
                        onClick={this.handleFormSubmit}>Submit</FormBtn>
                </form>
            </div>
        );
    }
}

export default CustomerForm;