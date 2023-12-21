import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {

    const [{basket},state,dispatch] = useStateValue();


    return (
        <div className='header'>
            <Link to='/'>
            <img 
           className='header_logo'
           src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png" alt='amazon'/>
            
            
            </Link>
           
        

        <div className='header_search'>
            <input 
            className='header_searchInput' type='text'/>
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <Link to='/login'>
            <div className='header_option'>
                <span 
                className='header_optionLineone'>
                    Hello Guest
                </span>
                <span 
                className='header_optionLinetwo'>
                    Sign in
                </span>
            </div>
            </Link>
            <div className='header_option'>
            <span 
                className='header_optionLineone'>
                    Returns
                </span>
                <span 
                className='header_optionLinetwo'>
                    & Orders
                </span>
            </div>
            <div className='header_option'>
            <span 
                className='header_optionLineone'>
                    Your
                </span>
                <span 
                className='header_optionLinetwo'>
                    Prime
                </span>
            </div>
            <Link to='/checkout'>
            <div className='header_optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header_optionLinetwo header_basketCount'>
                    {basket?.length}
                </span>
            </div>
            </Link>




        </div>
        </div>
    )
}

export default Header
