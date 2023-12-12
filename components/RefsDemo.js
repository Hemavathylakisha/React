import React, { Component } from 'react';

// it refers to focus on element called refs
class RefsDemo extends Component {
    constructor(props) {
      super(props)
    // first approach
      this.inputRef = React.createRef()

    // second approach
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
  
    componentDidMount(){

        // First approach
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // Second approach
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    handleClick = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
         <input type="text" ref={this.inputRef} />
         <input type="text" ref={this.setCbRef} />
         <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default RefsDemo;
