class categoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.this.state = {
      category: '',
    };

    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const category = target.category;

    this.setState({ value : event.target.value });
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          category:
          <input
            name = "category"
            type = "text"
            value = {this.state.category}
            onChange = {this.handleInputChange} 
          />
        </label>
        <input 
          type = "submit" 
            value = "Submit" 
          />

      </form>
    );
  }
}