import React, {Component} from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Hema">
         <ComponentC />
       </UserProvider>
    </div>
  );
}

export default App;
