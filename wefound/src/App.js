import './App.css';
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import Cart from './Components/Cart';

// import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <HomePage/>
      <Cart/>
      
    </div>
  );
}

export default App;
