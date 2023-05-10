import React, {Component} from "react";
import PizzaUpdate from "./pizzeriaupdate";
import axios from "axios";


class PizzaDetail extends Component{

  constructor(props){
    super(props);
    this.state = {
      showComponent: false,
    }
    this.updatePizzeriaDetail = this.updatePizzeriaDetail.bind(this);
    this.deletePizzeria = this.deletePizzeria.bind(this)
  }

  render() {
    const obj = this.props.pizzeriaDetail
    return (
      <div style={{color: 'yellow', border: '1px solid yellow',}}>
        <h4>{obj.pizzeria_name}</h4>
        <h5>Address: {obj.street} {obj.city} {obj.state} {obj.zip_code}</h5>
        <h6>Phone: {obj.phone_number}</h6>
        <p>{obj.description}</p>
        <button
          style={{background: 'white',}}
          onClick={() => this.updatePizzeriaDetail()}
        >
          Update
        </button>
        <button
          style={{background: 'white',}}
          onClick={() => this.deletePizzeria(obj.delete)}
        >
          Delete
        </button>
        {this.state.showComponent && <PizzaUpdate pizzaUpdate={obj} />}
      </div>
    )
  }

  updatePizzeriaDetail() {
    this.setState({showComponent: true})
  }

  deletePizzeria(obj) {
    console.log(obj);
    axios.delete(process.env.REACT_APP_URL.concat(obj)).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
}

export default PizzaDetail;