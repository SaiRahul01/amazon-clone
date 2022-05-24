import React from 'react'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='header'>
        <img src="https://cdn.iconscout.com/icon/free/png-64/amazon-1869030-1583154.png" alt="" />
        <div className="searchbar">
            <input type="text" />

        </div>
        <div className="navbar_nav">
            <div className="navitem">
                <span>Hello Guest</span>
                <span>Sign In</span>

            </div>
            <div className="navitem">
                <span>Orders</span>
                
            </div>
            <div className="navitem">
                <span>Cart</span>
                
            </div>
        </div>
        
    </div>
  )
}
