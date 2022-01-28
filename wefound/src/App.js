import './App.css';
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import MainSearch from './Components/MainSearch';
import HomePage from './Components/HomePage'
import Product from './Components/Product';
import SignUp from "./Components/SignUp"
import React from "react";
import Cart from "./Components/Cart";

function App() {

    // const [credentials, setCredentials] = React.useState()
    //
    // function userAlive(data) {
    //     setCredentials(data)
    // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/products" element={<MainSearch />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/Home" element={<HomePage />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cart" element={<Cart />} />



      </Routes>

    </div>
  );
}

export default App;
