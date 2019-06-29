import React from "react"
import axios from "axios"
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
        <div>
        <form> 
          <label>
            color:
            <input
            name="color"
             type="text" 
             value={this.state.color} 
             onChange={this.handleInputChange} />
          </label>
           <br />
          count:
          <input
          name="count"
          type="text"
          value={this.state.count}
          onChange={this.handleInputChange} />
          date Purchased:
          <input
          name="datePurchased"
          type="text"
          value={this.state.datePurchased}
          onChange={this.handleInputChange} />
          purchase price:
          <input
          name="purchasePrice"
          type="number"
          value={this.state.purchasePrice}
          onChange={this.handleInputChange} />
          seller:
          <input
          name="seller"
          type="text"
          value={this.state.seller}
         onChange={this.handleInputChange} 
          />

        </form>
        <button onClick={this.handlesubmit}>save</button>
        </div>
      );
    }
  }
  export default LotsForm