import React, { Component } from 'react';
import Box from './Box.js';

class Grid extends Component {
	constructor() {
    super();
    this.changeNumber = this.changeNumber.bind(this);
    this.state = {
      row: [0,0,0,0,0,0,0,0,0],
    };
  }

  changeNumber(i) {
  	const row = [...this.state.row];
  	row[i] = row[i]===0 ? 1 : 0;
  	this.setState({row: row});
  }

  render() {
    return (
    	<div id="grid">
    		{
    			this.state.row.map((val, index) => {
    				return <Box onClick={() => this.changeNumber(index)} key={index} value={val}/>
    			})
    		}
    	</div>
    )
  }
}

export default Grid;
