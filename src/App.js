import React, { Component } from 'react';
import DogImage from './components/DogImage';
import Button from './components/Button';
import './App.css';

class App extends Component {
  constructor(props){
    // console.log('constructor / entrou')
    super(props);
    this.state = {
      dogURLs: null,
      loading: true,
    };

    this.passDog = this.passDog.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    // console.log('constructor / saiu')
  }

  async fetchAPI() {
    // console.log('fetchAPI / entrou')
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestObject = await requestReturn.json();
  
    this.setState({
      dogURLs: requestObject.message,
      loading: false,
    });
    // console.log('fetchAPI / saiu')
  }

  passDog() {
    // console.log('passDog / entrou')
    this.setState({
      loading: true,
    });

    this.fetchAPI();
    // console.log('passDog / saiu')
  }

  componentDidMount(){
    // console.log('componentDidMount / entrou')
    this.fetchAPI();
    // console.log('componentDidMount / saiu')
  };

  componentDidUpdate() {
    // console.log('componentDidUpdate / entrou')
    const urlArr = this.state.dogURLs.split('/');
    const breed = urlArr[4];
    localStorage.setItem(`${breed}`, this.state.dogURLs);
    // console.log('componentDidUpdate / saiu')
  }

  render() {
    // console.log('render / entrou')
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
