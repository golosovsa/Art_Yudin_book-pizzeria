import React, {Component} from 'react';
import axios from 'axios';


class PizzaUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      obj_to_update: this.props.pizzaUpdate,
      value: this.props.pizzaUpdate.description,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    const {value} = this.state
    return (
      <div style={{color: 'red', border: '1px solid red', }}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h6>Updating</h6>
            <input type="text" value={value} onChange={this.handleChange} />
          </div>
          <input class={{backgroundColor: 'white', }} type="submit" value="Submit" />
        </form>
      </div>
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.patch(process.env.REACT_APP_URL.concat(this.state.obj_to_update.update), {description: this.state.value}).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
}

export default PizzaUpdate;