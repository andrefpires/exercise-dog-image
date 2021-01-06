import React, { Component } from 'react';

export default class DogImage extends Component {
  shouldComponentUpdate() {
    const dogURLs = this.props.url;
    let response = true;
    if (dogURLs !== null) {
      const urlArray = dogURLs.split('/');
      const stringSearch =  urlArray.includes('terrier');
      if (stringSearch) {
        response = false;
      }
    }

    return response;
  }

  render() {
    const loadingElement = <p>loading...</p>;
    const dogImageElement = <img src={this.props.url} />;
    return (
      <div>
        {this.props.loadingValue ? loadingElement : dogImageElement}
      </div>
    );
  }
};
