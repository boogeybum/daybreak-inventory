class LotsForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          color: '',
          count: 0,
          datePurchased: '',
          purchasePrice: 0,
          seller: '',
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const color = target.color;
        const count = target.count;
        const datePurchased = target.datePurchased;
        const purchasePrice = target.purchasePrice;
        const seller = target.seller;

      this.setState({value: event.target.value});
    }
  
    
      render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            color:
            <input
            name="color"
             type="text" 
             value={this.state.color} 
             onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
          <br />
          count:
          <input
          name="count"
          type="text"
          value={this.state.count}
          onchange={this.handleInputCHange} />
          date Purchased:
          <input
          name="date purchased"
          type="text"
          value={this.state.datePurchased}
          onchange={this.handleInputCHange} />
          purchase price:
          <input
          name="purchase price"
          type="number"
          value={this.state.purchasePrice}
          onchange={this.handleInputCHange} />
          seller:
          <input
          name="seller"
          type="text"
          value={this.state.seller}
          onchange={this.handleSubmit} />

        </form>
      );
    }
  }