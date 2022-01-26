import './App.css';
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
// import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Login/>

      <HomePage/>
    </div>
  );
}

export default App;
