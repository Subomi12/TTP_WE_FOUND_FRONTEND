import './App.css';
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom';
import NavBar from "./Components/Navbar"
import MainSearch from './Components/MainSearch';
import HomePage from './Components/HomePage'
import Product from './Components/Product';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products" element={<MainSearch/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/Home" element={<HomePage/>}/>
      </Routes>

    </div>
  );
}

export default App;
