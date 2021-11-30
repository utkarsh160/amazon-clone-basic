import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket},dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad'src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg' alt=''/>
            
            <div >
                <h2 className='checkout_title'>
                    Your Shopping Basket


                    {basket.map(item =>
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        
                        />
                        )}

                </h2>

            </div>
            </div>
            <div className='checkout_right'>
                <Subtotal/>

            </div>
            
        </div>
    )
}

export default Checkout
