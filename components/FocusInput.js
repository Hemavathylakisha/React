import React, { Component } from 'react';
import Input from './Input'
// use componentref to call ref from Input parent component of focusInput method
class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    focusElement = () =>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.focusElement}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
