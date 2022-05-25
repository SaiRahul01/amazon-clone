import React from 'react'
import './Home.css'
import Product from './Product'


export default function Home() {
    return (
        <>
            <div  style={{ marginTop: '0px', border: '5px solid black', width: '100%', marginLeft: '0px', position: 'relative', height: '3000px' }}>

                <img className='homebanner' src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg" alt="" />
                <div className="home ">
                <div className="home_row">
                    <Product title="Mexican Pizza" rating={5} image="https://m.media-amazon.com/images/I/71CKU16foLL._AC_SY200_.jpg" price="60"/>
                    <Product title="Mexican Pizza" rating={5} image="https://m.media-amazon.com/images/I/81mLBoKkiyL._AC_SY200_.jpg" price="70"/>

                </div>
                <div className="home_row">
                    <Product title="Mexican Pizza" rating={3} image="https://m.media-amazon.com/images/I/61ZjaqqnocS._AC_SY200_.jpg" price="100"/> 
                    <Product title="Mexican Pizza" rating={2} image="https://m.media-amazon.com/images/I/51ZBqKhH4nL._AC_SY200_.jpg" price="60"/>
                    <Product title="Mexican Pizza" rating={4}image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg" price="60"/>

                </div>
                <div className="home_row">
                    <Product title="Yonex Nanoray" rating={3}image="https://images-eu.ssl-images-amazon.com/images/I/71WtW9tk4ZL._AC_UL160_SR160,160_.jpg" price="60"/>

                </div>


                </div>
               

            </div>
        </>
    )
}
