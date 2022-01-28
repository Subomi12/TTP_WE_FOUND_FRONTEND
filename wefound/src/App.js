import './App.css';
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import MainSearch from './Components/MainSearch';
import HomePage from './Components/HomePage'
import Product from './Components/Product';
import SignUp from "./Components/SignUp"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products" element={<MainSearch/>}/>

        <Route path="/product" element={<Product/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp />}/>



      </Routes>

    </div>
  );
}

export default App;
