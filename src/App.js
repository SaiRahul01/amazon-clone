import Home from "./components/Home";
import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/checkout" element={<Home/>}></Route>
        
      </Routes>
      <Footer/>
     


      </Router>
    
    </div>
  );
}

export default App;
