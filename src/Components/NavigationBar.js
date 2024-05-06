import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
// import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Import the faCartShopping icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import userContext from './Utils/userContext';
import { useSelector } from 'react-redux';
const NavigationBar = () => {
  const [loginState , setLoginState] = useState(false) ;
  const {loggedInUser } = useContext(userContext);
  const cartData = useSelector((store) => store.cart.items);


  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-[#FFB6B9] text-white">
      <div className="flex items-center">
        <img src={logo} alt='Logo' className='rounded-full' width={100}/>
      </div>
      <ul className="flex items-center space-x-4">
        <li><Link to="/" className="text-white hover:text-[#DE2E73]">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-[#DE2E73]">About Us</Link></li>
        <li><Link to="/contact" className="text-white hover:text-[#DE2E73]">Contact Us</Link></li>
      </ul>
     
      <div className='flex gap-3 items-center relative '>

      <Link to="/cart">
      
          <div className='bg-[#f15e99] flex  hover:bg-[#DE2E73] rounded-lg px-4  py-[8px]'>
              <FontAwesomeIcon icon={faCartShopping}  
              className= " hover: stroke-[#511f3a] " style={{  color: "#fff",}} /> 
                <div className='absolute left-[35px] text-[12px]  pr-2 pt-1  top-0 '>
                {
                  cartData.length
                }
                </div>

        
          </div>
          </Link>
    
          
          <button className="bg-[#f15e99] hover:bg-[#DE2E73] text-white font-semibold py-2 px-4 rounded" 
          onClick={()=> {setLoginState(true)}}> 
          {loginState ? <p> {loggedInUser}</p> : <p>
          Login
          </p>}
          </button>
          </div>

    </nav>
  );
};

export default NavigationBar;
