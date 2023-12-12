import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';

export class App extends Component {
  render() {
    return (
      <div class="App">
        {/* <Form /> 
        <LifecycleA />
        <FragmentDemo />
        <Table />
        <ParentComp />
        <RefsDemo />
        <FocusInput />
        <FRParentInput />
        <PortalDemo />*/}
      </div>
    );
  }
}

export default App;
