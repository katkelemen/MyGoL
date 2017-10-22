import React, { Component } from 'react';

class Box extends Component {

  render() {
  	const boxClass = this.props.value===0 ? "square" : "square-filled";
    return (
  		<div className={boxClass} onClick={() => this.props.onClick()}></div>
    )
  }
}

export default Box;