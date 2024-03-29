import React, { Component } from 'react';

class CounterTwo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
      increamentCount = () => {
          this.setState(prevState => {
              return {count: prevState.count + 1}
          })
      }
  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.increamentCount)}
      </div>
    );
  }
}

export default CounterTwo;
