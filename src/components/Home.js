import React from 'react'
import './Home.css'
import Product from './Product'


export default function Home() {
    return (
        <>
            <div  style={{ marginTop: '0px', border: '5px solid black', width: '100%', marginLeft: '0px', position: 'relative', height: '2000px' }}>

                <img className='homebanner' src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg" alt="" />
                <div className="home ">
                <div className="home_row">
                    <Product fs={20} title="Apple iPhone 12 (128GB) - Black" rating={4} image="https://m.media-amazon.com/images/I/61kYwdMmD-L._AC_UY327_FMwebp_QL65_.jpg" price="500"/>
                    <Product fs={20} title="Sony Bravia 164 cm (65 inches) 4K Ultra " rating={5} image="https://m.media-amazon.com/images/I/81rFvuvqaNL._AC_UY327_FMwebp_QL65_.jpg" price="400"/>

                </div>
                <div className="home_row">
                    <Product fs={20} title="Dell New XPS 9305 Intel i7-1165G7 13.3,16GB LPDDR4, 512Gb SSD" rating={3} image="https://m.media-amazon.com/images/I/51PvPQ-8xgL._AC_UY327_FMwebp_QL65_.jpg" price="100"/> 
                    <Product fs={22} title="Men's Adispree 5.0 M Running Shoes
" rating={2} image="https://m.media-amazon.com/images/I/81AKPSr87LL._AC_UL480_QL65_.jpg" price="60"/>
                    <Product fs={25} title="Cadbury Dairy Milk Silk Bubbly Chocolate Bar, 50g- Pack of 6" rating={4}image="https://m.media-amazon.com/images/I/71yB2nPAq4L._AC_UL480_FMwebp_QL65_.jpg" price="8"/>

                </div>
                <div className="home_row">
                    <Product fs={20} title="YONEX Smash Badminton Racquet (G4, 73 Grams, 28 lbs Tension)" rating={3}image="https://m.media-amazon.com/images/I/91Lu9brnTNL._AC_UL480_FMwebp_QL65_.jpg" price="60"/>

                </div>


                </div>
               

            </div>
        </>
    )
}
