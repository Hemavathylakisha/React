import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
     {/* <Counter /> */}
      {/* <Greet name="Nalin" value="Boy" ><p>This is children</p></Greet> */}
      {/* <Greet  name="Likitha" value="girl"><button>set</button></Greet>
      <Greet  name="Myworld" value="life"/>
      
       <Welcome  name="Nalin" value="Boy"/> 
       <Welcome  name="Nalin" value="Boy"/>  
        <Welcome  name="Nalin" value="Boy"/> */}
      {/* <Hello /> 
      <FunctionClick />
      <ClassClick />*/}
      {/* <EventBind /> 
      <ParentComponent />
      <UserGreetings />
      <NameList />
      <Stylesheet primary={true} />*/}
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
