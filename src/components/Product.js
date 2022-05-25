import React from 'react'
import './Product.css'
import Button from '@mui/material/Button';

export default function Product({title,price,rating,image,fs}) {
  return (
    <div className='product'>
        <div className="product_info">
            <h1 style={{fontSize:fs}}>{title}</h1>
            <p className="product_price"><b>${price}</b></p>

        </div>
        <div className="product_rating">
            
            {Array((rating)).fill().map((_,i)=>(
                    <p>⭐</p>)
            )}
        </div>
        <img src={image} alt="" />
        <Button className='addbtn' variant="contained">Add to Cart</Button>

    </div>
  )
}
