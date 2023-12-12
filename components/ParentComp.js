import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Hema'
      }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name : 'Hema'
            })
        }, 2000)
    }
    
  render() {
    console.log('**********Parent component*************')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name={this.state.name} ></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
