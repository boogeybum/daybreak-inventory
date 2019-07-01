import React, { Component } from 'react';
import axios from "axios"
import NameForm from "../components/LotForm/lot"

class LotsForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          color: '',
          count: '',
          datePurchased: '',
          purchasePrice: '',
          seller: '',
    };
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlesubmit=()=> {
      console.log('about to save',this.state)
      axios.post("https://localhost:3001/savelot",this.state).then(function(data){
        console.log("from backend",data)
      })

    }
  
    handleInputChange=(event)=> {
      // console.log('what we typed',event.target.name,event.target.value)
        const target = event.target;
        const color = target.color;
        const count = target.count;
        const datePurchased = target.datePurchased;
        const purchasePrice = target.purchasePrice;
        const seller = target.seller;
        const partOfState = event.target.name
      this.setState({[partOfState]: event.target.value});
    }
  
    
      render() {
        console.log('state',this.state)
      return (
       <main>
        <NameForm handleInputChange={this.handleInputChange this.handlesubmitclick={this.handlesubmitclick}} />

       </main>
      );
    }
  }
  export default LotsForm