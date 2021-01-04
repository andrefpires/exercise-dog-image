import React, { Component } from 'react';

export default class DogImage extends Component {
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
