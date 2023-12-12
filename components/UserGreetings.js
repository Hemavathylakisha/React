import React, { Component } from 'react';

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {
    // 4th approach using short circuit operator
    // return this.state.isLoggedIn && (<div>Welcome Hema</div>)

    // 3rd approach using ternary operator
    return this.state.isLoggedIn ? (<div>Welcome Hema</div>
    ) : (
        <div>Welcome Guest</div>
    )

    // 2nd approach using variable
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Hema</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return(
    //     <div>{message}</div>
    // )

    // First approach if/else
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>welcome Hema</div>
    //     )
    // }else{
    //     return(
    //         <div>welcome Guest</div>
    //     )
    // }

    // return (
    //   <div>
    //     <div>welcome Hema</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreetings;
