import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://m.media-amazon.com/images/I/611RH0ytKXL._SX3000_.jpg' alt=''/>
            
            <div className='home_row'>
                <Product
                id='423548'
                title='HP 14s-DY2501TU Laptop (11th Gen Intel Core i3-1115G4/8GB/256GB SSD/Intel UHD Graphics/Windows 10/MSO/Full HD), 5.56 cm (14 inch)'
                price={500.56}
                image="https://target.scene7.com/is/image/Target/GUEST_54f208f1-66f6-4dea-a57f-08e67223e2e6"
                rating={3}
                />
                <Product
                id='456213'
                title='New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band'
                price={20.63}
                image="https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
                rating={5}
                />
            </div>
            <div className='home_row'>
                <Product
                id='566254'
                title='PHILIPS MIXER GRINDER HL7760-00 (3 JAR 750W)'
                price={256.45}
                image="https://d2xamzlzrdbdbn.cloudfront.net/products/9fba7f45-d65b-4bce-bb3e-15cebe59181e.jpg"
                rating={3}
                />
                <Product
                    id='587512'
                    title='(Renewed) JBL Clip 3 Ultra 3.3 Watt Wireless Bluetooth Portable Speaker (Red)'
                    price={65.99}
                    image="https://m.media-amazon.com/images/I/91vy+K03yWL._SL1500_.jpg"
                    rating={3}
                />
                <Product
                    id='532255'
                    title='Dennis Lingo Men Shirt'
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/51yIybqYFTL._UL1100_.jpg"
                    rating={3}
                />
            </div>
            <div className='home_row'>
                <Product
                    id='652836'
                    title='Samsung 108 cm (43 Inches) Wondertainment Series Full HD LED Smart TV UA43TE50AAKXXL (Titan Gray) (2020 model)'
                    price={1299.99}
                    image="https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/neo-gled-4k/qn85a/gallery/02042021/01_QN65QN85AAFXZA_011_Front3_Titan-Black-1600x1200.jpg?$product-details-jpg$"
                    rating={4}
                />
            </div>           
            </div>           
        </div>
    )
}

export default Home
