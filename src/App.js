import React, { Component } from 'react';
import DogImage from './components/DogImage';
import Button from './components/Button';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogURLs: null,
      loading: true,
    };

    this.passDog = this.passDog.bind(this);
  }

  async fetchAPI() {
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestObject = await requestReturn.json();
  
    this.setState({
      dogURLs: requestObject.message,
      loading: false,
    });
  }

  passDog() {
    this.setState({
      loading: true,
    })

    this.fetchAPI();
  }

  componentDidMount(){
    this.fetchAPI();
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            Dog Pictures
          </h1>
        </header>
        <DogImage loadingValue={this.state.loading} url={this.state.dogURLs} />
        <Button functionPassDog={this.passDog} />
      </div>
    );
  }
};

export default App;
