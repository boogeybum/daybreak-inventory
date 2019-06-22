class itemCategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.this.state = {
      description: '',
    };

    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const description = target.description;

    this.setState({ value : event.target.value });
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          description:
          <input
            name = "description"
            type = "text"
            value = {this.state.description}
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