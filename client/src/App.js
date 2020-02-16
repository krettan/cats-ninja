import React, { Component } from 'react';
import Predictions from './components/predictions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    predictions: []
  }
  
  componentDidMount() {
    fetch('http://cats-ninja-api.herokuapp.com/predictions')
      .then(res => res.json())
      .then((data) => {
        this.setState({ predictions: data })
      })
      .catch(console.log)
  }
  
  render () {
    return (
      <Predictions predictions={this.state.predictions} />
    );
  }
}

export default App;
