import React, { Component } from 'react';

const ToDo = (props) => (
<tr>
    <td><label>{props.index}</label></td>
    <td><label>{props.Id}</label></td>
    <td><input /></td>
    <td><label>{props.createdAt.toLocaleTimeString()}</label></td>
</tr>
);

class SampleKeyList extends React.Component {
    constructor(props) {
      super(props)
    const date = new Date();
    const todoCounter = 1;
      this.state = {
         todoCounter : todoCounter,
         list : [
            {
            Id: todoCounter,
            createdAt : date
        }
         ],
      };
    }
    addnewEnd = () => {
        const date = new Date();
        const nextId = this.state.todoCounter + 1;
        const newList = [
            {Id: nextId , createdAt : date},
            ...this.state.list,
        ];
        this.setState({
            list : newList,
            todoCounter : nextId,
        });
    }
    addnewStart = () => {
        const date = new Date();
        const nextId = this.state.todoCounter + 1;
        const newList = [
            {Id: nextId , createdAt : date},
            ...this.state.list,
        ];
        this.setState({
            list : newList,
            todoCounter : nextId,
        });
    }
    sortByEarliest = () => {
        const sortedList = this.state.list.sort((a,b) => {
            return a.createdAt - b.createdAt;
        });
        this.setState({
            list : [...sortedList],
        });
    }
    sortByLatest = () => {
        const sortedList = this.state.list.sort((a,b) => {
            return b.createdAt - a.createdAt;
        });
        this.setState({
            list : [...sortedList],
        });
    }
  render() {
    return (
      <div>
        <code>Sample key and list using map</code>
        <br></br>
            <button onClick={this.addnewStart}  >Add New to Start</button>
            <button onClick={this.addnewEnd}  >Add New to End</button>
            <button onClick={this.sortByEarliest}  >Sort By Earliest</button>
            <button onClick={this.sortByLatest}  >Sort By latest</button>
        
        <table align="center">
            <tr>
                <th>Index</th>
                <th>Id</th>
                <th>Item</th>
                <th>CreatedAt</th>
            </tr>
           
                    {
                        this.state.list.map((todo , index) => (
                        <ToDo key={index} index={index} {...todo} /> 
                    ))
                }
              
        </table>
      </div>
    );
  }
}

export default SampleKeyList;
