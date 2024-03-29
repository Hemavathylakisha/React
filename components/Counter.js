import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    Increment(){
    //     this.setState({
    //     count : this.state.count + 1
    //  }, () =>{
    //     console.log('callback value', this.state.count)
    // } )
    
    //used previous state value here
        this.setState(prevState => ({
            count : prevState.count + 1     
        }),() =>{
               console.log('callback value', this.state.count)}
        )
        console.log(this.state.count);      
    }

    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
    
  render() {
    return (
      
        <div>

            <div> count : {this.state.count} </div>
            <button onClick={() =>this.IncrementFive()}>Increment</button>
        </div>
      
    );
  }
}

export default Counter;
