import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    // const {id} = this.props.match.params
    // this.fetchSmurfs(id);
    axios
      .get("http://localhost:3333/smurfs/")
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  postSmurf = () => {};

  // fetchSmurfs = id => {
  // };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/smurfs-form">Add Smurf</Link>
        </div>
        <Route exact path="/smurfs-form" component={SmurfForm} />
        <Route
          exact
          path="/"
          render={() => <Smurfs smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
