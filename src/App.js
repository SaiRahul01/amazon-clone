import Home from "./components/Home";
import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {useEffect} from "react"
import { auth } from "./firebase";
import { useStateValue } from "./components/Stateprovider";


function App() {
  const [{},dispatch]=useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(au=>{

      if(au){
        dispatch({
          type:'SET_USER',
          user:au
        })

      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
  }, [])
  




  return (
    <div >
      <Router>
     
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/checkout" element={<Checkout/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        
        
      </Routes>
 
     


      </Router>
    
    </div>
  );
}

export default App;
