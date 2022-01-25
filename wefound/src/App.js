import './App.css';
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
    </div>
  );
}

export default App;
