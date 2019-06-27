import React, { Component } from "react";
import { Input, TextArea, FormBtn, FormRow } from "../form tools/form";

class CustomerForm extends Component {
    render() {
        return (
            <div
                id="add-customer"
                // className="collapse"
            >
                <form>
                    <FormRow>
                    <Input name="title" colSpecs = "form-group col-sm-4" placeholder="First Name (required)" id = "title" labelText = "First name" />
                    <Input name="last-name" placeholder="Last Name (required)" colSpecs = "form-group col-sm-4" id = "last-name" labelText = "Last name" />
                    <Input name="email" placeholder="enter email" colSpecs = "form-group col-sm-4" id = "email" labelText = "Email" type= "email" />
                    </FormRow>
                    <Input name="address" placeholder="Street, City, State, Country (required)" colSpecs = "form-group col-sm-12" id = "address" labelText = "Address" />
                    <TextArea name="notes" placeholder="Add some notes about the customer (Optional)" rows = "5" id = "notes" className = {"form-group col-sm-12 rounded"} labelText = "Add notes"/>
                    <FormBtn type = "submit" btnDetails = {"btn btn-success"} >Submit</FormBtn>
                </form>      
            </div>
        );
    }
}

export default CustomerForm;