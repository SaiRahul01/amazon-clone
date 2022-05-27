import React from 'react'
import './Totalcost.css'
import CurrencyFormat from 'react-currency-format'
import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './reducer';


export default function Totalcost() {
    const [{basket},dispath]=useStateValue()
  return (
    <div className='totalcost'>
   
        <CurrencyFormat
        renderText={(value)=> (
            <>
            <p>
                Subtotal ({basket?.length} items):
                <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type="checkbox"/>
                <span>This contains a gift</span>

            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

        
        
        
        
        />
    </div>
  )
}
