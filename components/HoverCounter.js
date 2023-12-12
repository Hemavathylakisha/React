import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
   
  render() {
    const {count, increamentCount} = this.props
    return <h1 onMouseOver={increamentCount}>
        Hover {count} times</h1>
  }
}

export default withCounter(HoverCounter,10);
