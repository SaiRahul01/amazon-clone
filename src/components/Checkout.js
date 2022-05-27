import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Footer from './Footer'
import Navbar from './Navbar'
import { useStateValue } from './Stateprovider'
import Totalcost from './Totalcost'

export default function Checkout() {

    const [{basket},dispatch]=useStateValue()
    
  return (
    <>
    <Navbar/>
    {basket.length===0?<div className='emptycart'>
        <div className="emptycartimage"><img src="https://cdn-icons-png.flaticon.com/128/3737/3737173.png" alt="" /></div>
    <h1 className='oopstext'>Your Shopping cart is Empty</h1>
    <Link to="/"><button className='additemsbutton'>Shop Items</button></Link>
    </div> :<div className='checkout text-center'>
        <div className="checkout_left">
            <img src="" alt="" />
            <div className="checkout_title">
                <h2 className='text-cente carttitle' >Your Shopping Cart</h2>
            </div>
            <div>
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
            <h2>Your subtotal</h2>
            <Totalcost/>
            <button  className='button'>Proceed to Pay</button>

        </div>
    </div>}
    <Footer/>
    </>
  )
}
