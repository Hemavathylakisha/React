import React, {Component} from 'react';
import './App.css';
import './bootstrap.min.css';
import './styles.css';
import AppModalpopup from './components/AppModalpopup'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo'


function App() {
  return (
    <div className="App">
        {/* <AppModalpopup /> */}
        {/* <ClickCounter name="Hema" />
        <HoverCounter /> */}
  {/* <ClickCounterTwo />
  <HoverCounterTwo />
  <User render={(isLoggedIn) => isLoggedIn? 'Hema' : 'Guest' } /> */}
  <CounterTwo>
      {(count,increamentCount) => (
        <ClickCounterTwo count={count} increamentCount={increamentCount} />
      )}
  </CounterTwo>
  <CounterTwo>
      {(count,increamentCount) => (
        <HoverCounterTwo count={count} increamentCount={increamentCount} />
      )}
 </CounterTwo> 
    </div>
  );
}

export default App;
