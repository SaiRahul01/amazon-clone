import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useStateValue } from './Stateprovider'
import Totalcost from './Totalcost'

export default function Checkout() {

    let navi=useNavigate()

    const [{basket,user},dispatch]=useStateValue()
    const handleshopping=()=>{
        if(user){
            navi("/")
        }
        else{
            navi("/login")
        }
    }
    
  return (
    <>
    <Navbar/>
    <h2 className='usersname'>Hello {user?user.email:'Guest'}</h2>
    {basket.length===0?<div className='emptycart'>
        <div className="emptycartimage"><img src="https://cdn-icons-png.flaticon.com/128/3737/3737173.png" alt="" /></div>
    <h1 className='oopstext'>Your Shopping cart is Empty</h1>
    <button onClick={handleshopping} className='additemsbutton'>{user?'Shop Items':'Login to Shop'}</button>
    </div> :<div className='checkout text-center'>
        
        <div className="checkout_left">
            <img src="" alt="" />
            <div className="checkout_title">
                <h2 className='text-cente carttitle' >Your Shopping Cart</h2>
            </div>
            <div className='checkout_left1'>
                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>

        </div>
        <div className="checkout_right">
        <img src="" alt="" />
        <br /><br />    
            <h4>Your subtotal</h4>
            <Totalcost/>
            <button  className='button'>Proceed to Pay</button>

        </div>
    </div>}
    
    </>
  )
}
