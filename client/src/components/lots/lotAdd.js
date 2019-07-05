import React, { Component } from 'react';
import Moment from 'react-moment';
import { Input, FormBtn, FormRow } from "../form tools/form";
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
                    this.loadLots();
                    this.setState({
                        color: "",
                        count: "",
                        datePurchased: "",
                        purchasePrice: "",
                        seller: ""
                    });
                     console.log(res)})
                .catch(err => console.log(err));
        }
    };
    render() {
        // console.log(this.state.lots)
        return (
            <div className="container lot">
                <h3 className="display-4">Lots</h3>
                {/* button that toggles a form to add a new lot */}
                <FormBtn data-toggle="collapse" data-target="#add-lot" type="button" style={{ borderBottom: "solid", borderColor: "green" }}>Add Lot <span style={{ paddingLeft: "10px" }}>+</span></FormBtn>

                {/* form to add a new lot */}
                <div
                    id="add-lot"
                    className="collapse"
                >
                    <form>
                        <FormRow>
                            <Input name="color" colspecs="form-group col-sm-4" placeholder="Color (required)" id="title" labeltext="Color" value={this.state.color}
                                onChange={this.handleInputChange} />
                            <Input name="count" placeholder="count (required)" colspecs="form-group col-sm-4" id="count" labeltext="count" value={this.state.count}
                                onChange={this.handleInputChange} />
                            <Input name="datePurchased" placeholder="date purchased (required)" colspecs="form-group col-sm-4" id="date purchased" labeltext="date purchased" value={this.state.datePurchased}
                                onChange={this.handleInputChange} />
                        </FormRow>
                        <Input name="purchasePrice" placeholder="purchase price(required)" colspecs="form-group col-sm-6" id="purchase price" labeltext="purchase price" value={this.state.purchasePrice}
                            onChange={this.handleInputChange} />
                        <Input name="seller" placeholder="seller(required)" colspecs="form-group col-sm-6" id="seller" labeltext="seller" value={this.state.seller}
                            onChange={this.handleInputChange} />
                        <FormBtn type="submit" btndetails={"btn btn-success"}
                           
                            onClick={this.handleFormSubmit}>Submit</FormBtn>
                    </form>
                </div>
                <p></p>
                {/* Table for existing lots in the database */}
                <table className="table table-striped">
                    <thead className="thead-dark">
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
                        {this.state.lots.map((lots,index) =>(
                            <tr key={index}>
                                <th scope="row">{lots.id}</th>
                                <td>{lots.color}</td>
                                <td>{lots.count}</td>
                                <td><Moment format="MM/DD/YYYY">{lots.purchasedate}</Moment></td>
                                <td>{lots.cost}</td>
                                <td>{lots.seller}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                
            </div>
        );
    }
}

export default LotsForm;