import React, {Component} from "react";

class Welcome extends Component{
  
    render(){
        //restructuring state
        const {name, value} = this.props
        //const {state1, state2} = this.state
        return <h1>Welcome {name} a k a {value}</h1>
    }
}

export default Welcome