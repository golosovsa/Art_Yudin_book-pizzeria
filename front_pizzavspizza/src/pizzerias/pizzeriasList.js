import React, {Component} from "react";
// import DummyData from "./dummydata.json";
import PizzaDetail from "./pizzeriadetail";
import axios from "axios";
import PizzaForm from "./pizzeriaform";


class PizzaList extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      pizzeriasData: [],
      pizzeria: " ",
      showComponent: false,
    }
    this.getPizzaDetail = this.getPizzaDetail.bind(this);
    this.showPizzeriaDetails = this.showPizzeriaDetails.bind(this);
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_URL).then((response) => {
      this.setState({pizzeriasData: response.data})
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  render(){
    return(
      <div>
        <div>
          <PizzaForm />
        </div>
        {/* {DummyData.map(item => <PizzaDetail p={item} />)} */}
        {this.state.pizzeriasData.map(item => (
          <h3 key={item.id} onClick={() => this.showPizzeriaDetails(item)}>
            {item.pizzeria_name}, {item.city}
          </h3>
        ))}
        {this.state.showComponent && <PizzaDetail pizzeriaDetail={this.state.pizzeria} />}
      </div>
    )
  }

  getPizzaDetail(item) {
    axios.get(process.env.REACT_APP_URL.concat(item.absolute_url)).then(response => {
      this.setState({pizzeria: response.data});
    }).catch(error => {
      console.log(error);
    })
  }

  showPizzeriaDetails(item){
    this.getPizzaDetail(item)
    this.setState({showComponent: true});
  }
}

export default PizzaList;
