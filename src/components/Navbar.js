import React from 'react'
import './Navbar.css'
import {Typography} from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


import SearchIcon from '@mui/icons-material/Search';
import { Link,useNavigate } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from '../firebase';


export default function Navbar() {
    let navi=useNavigate()

    const [{basket,user},dispath]=useStateValue()

    const handlesignout=()=>{
        if(user){
            auth.signOut();
            navi("/")

        }

    }
    const handlesignin=()=>{
        navi("/login")
    }
  return (
    <div id='header' className='header'>
        <Link to="/">  <img className='logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></Link>
      
        <div className="searchbar">
            <input className="searchbar1" type="text" />
            {/* <FontAwesomeIcon className='searchbarr' icon="fa-solid fa-magnifying-glass" /> */}

            <SearchIcon className='searchbarr'/>

        </div>

        <div className="navbar_nav">
            <div className="navitem">
            <span>Hello {auth.displayName} </span>
                <div className='loginlink'>
                
                <span>{user?<button onClick={handlesignout} className='signoutbtn'>Sign out</button>:<button onClick={handlesignin} className='signoutbtn'>Sign In</button>}</span>
                </div>

            </div>
            <div className="navitem">
                <span>Returns & Orders</span>
                
            </div>
          
            <div className="navitem nv">
                <Link to="/checkout" style={{color:'white'}}>

                <ShoppingCartOutlinedIcon className='carticon'/>
            

                </Link>
                <span className='cnt'><div style={{color:'orange '}}> {basket?.length}</div> <span>Cart</span></span>
            
               
                
            </div>
        </div>
        <div className="carticon">
            

        </div>
        
    </div>
  )
}
