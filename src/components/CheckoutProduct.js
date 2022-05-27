import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './Stateprovider'

export default function  CheckoutProduct({title,image,price,rating=4,id}) {

    const [{basket},dispatch]=useStateValue()
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET'
        })
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProductImage' src={image} alt="" />
        <div className="checkoutProductInfo">
            <p className="checkoutProduct_title">
                {title}
            </p>
            <p className="checkoutProduct_price">$ <strong>{price}</strong> </p>
            <p className="checkoutProduct_rating">{
                Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))
            }</p>
              <button className='removebtn' onClick={removeFromBasket}>Remove from Cart</button>
        </div>
      
    </div>
  )
}
