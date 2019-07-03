import React, { Component } from 'react';
import axios from "axios";
import { Input, TextArea, FormBtn, FormRow } from "../form tools/form";
import API from "../../utils/API";


class LotsForm extends Component {
    
     state = {
          lots: [],
          color: '',
          count: '',
          datePurchased: '',
          purchasePrice: '',
          seller: '',
    };
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    
    componentDidMount() {
        this.loadLots();
    }
  
    loadLots = () => {
        API.getLots()
            .then(res =>
                this.setState({ lots: res.data })
            )
            .catch(err => console.log(err));
    };

    saveLots = (lotData) => {
        API.saveLots(lotData)
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
        if (this.state.color && this.state.count && this.state.datePurchased && this.state.purchasePrice && this.state.seller) {
            console.log("about to save",this.state)
            API.saveLots({
                color: this.state.color,
                count: this.state.count,
                purchasedate: this.state.datePurchased,
                cost: this.state.purchasePrice,
                seller: this.state.seller
            })
                .then(res =>{
                    this.loadLots()
                     console.log(res)})
                .catch(err => console.log(err));
        }
    };
    render() {
        console.log(this.state.lots)
        return (
            <div className="container lot">
                {/* button that toggles a form to add a new lot */}
                <FormBtn data-toggle="collapse" data-target="#add-lot" type="button" style={{ borderBottom: "solid", borderColor: "green" }}>Add Lot <span style={{ paddingLeft: "10px" }}>+</span></FormBtn>

                {/* form to add a new lot */}
                <div
                    id="add-lot"
                    className="collapse"
                >
                    <form>
                        <FormRow>
                            <Input name="color" colSpecs="form-group col-sm-4" placeholder="Color (required)" id="title" labelText="Color" value={this.state.color}
                                onChange={this.handleInputChange} />
                            <Input name="count" placeholder="count (required)" colSpecs="form-group col-sm-4" id="count" labelText="count" value={this.state.count}
                                onChange={this.handleInputChange} />
                            <Input name="datePurchased" placeholder="date purchased (required)" colSpecs="form-group col-sm-4" id="date purchased" labelText="date purchased" value={this.state.datePurchased}
                                onChange={this.handleInputChange} />
                        </FormRow>
                        <Input name="purchasePrice" placeholder="purchase price(required)" colSpecs="form-group col-sm-6" id="purchase price" labelText="purchase price" value={this.state.purchasePrice}
                            onChange={this.handleInputChange} />
                        <Input name="seller" placeholder="seller(required)" colSpecs="form-group col-sm-6" id="seller" labelText="seller" value={this.state.seller}
                            onChange={this.handleInputChange} />
                        <FormBtn type="submit" btnDetails={"btn btn-success"}
                           
                            onClick={this.handleFormSubmit}>Submit</FormBtn>
                    </form>
                </div>
                {/* Table for existing lots in the database */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">color</th>
                            <th scope="col">count</th>
                            <th scope="col">datePurchased</th>
                            <th scope="col">purchasePrice</th>
                            <th scope="col">seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lots.map(lots =>(
                            <tr>
                                <th scope="row">{lots.id}</th>
                                <td>{lots.color}</td>
                                <td>{lots.count}</td>
                                <td>{lots.purchasedate}</td>
                                <td>{lots.cost}</td>
                                <td>{lots.seller}</td>
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

export default LotsForm;