import React, { Component } from 'react';
import Predictions from './components/predictions';
import LandingPage from './components/LandingPage';
import logo from './logo.svg';
import './App.css';

require('dotenv').config()

const giphy = require('giphy-api')({
  https: true,
  apiKey: process.env.GIPHY_API_KEY
});

class App extends Component {
  state = {
    predictions: [],
    cats: [],
    error: null,
  }
  
  componentDidMount() {
    giphy.search({
      q: 'ninja cats',
      limit: 10,
      offset: Math.floor(Math.random() * 100) + 1  
    })
      .then(res => {
        if (res.hasOwnProperty('data')) {
          return res.data
        } else {
          console.log(res.message);
          this.setState({ error: res.message })
          return []
        }
      })
      .then((cats) => {
        this.setState({ cats });
      })
      .catch(console.log)
  }
  
  render () {
    return (
      <LandingPage cats={this.state.cats} error={this.state.error} />
    );
  }
}

export default App;
