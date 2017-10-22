import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
  		<span onClick={() => this.props.onClick()}>{this.props.value}</span>
    )
  }
}

export default Box;