import React from 'react'
import './Navbar.css'
import {Typography} from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


import SearchIcon from '@mui/icons-material/Search';


export default function Navbar() {
  return (
    <div id='header' className='header'>
        <img className='logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        <div className="searchbar">
            <input className="searchbar1" type="text" />
            {/* <FontAwesomeIcon className='searchbarr' icon="fa-solid fa-magnifying-glass" /> */}

            <SearchIcon className='searchbarr'/>

        </div>

        <div className="navbar_nav">
            <div className="navitem">
                <span>Hello Guest</span>
                <span>Sign In</span>

            </div>
            <div className="navitem">
                <span>Returns & Orders</span>
                
            </div>
          
            <div className="navitem nv">
            <ShoppingCartOutlinedIcon className='carticon'/>
            <span className='cnt'><div style={{color:'orange '}}> 8</div> <span>Cart</span></span>
               
                
            </div>
        </div>
        <div className="carticon">
            

        </div>
        
    </div>
  )
}
