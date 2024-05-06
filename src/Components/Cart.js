import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { faTrashCan ,faDeleteLeft  } from '@fortawesome/free-solid-svg-icons'; // Import the faCartShopping icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItems from './CartItems';
import { clearCart, removeItem } from './Utils/cartSlice';

function Cart() {
    const cartData = useSelector((store)=> store.cart.items ) ;
    // console.log(cartData)
    const dispatch = useDispatch();
    const clearHandler = () => {
         dispatch(clearCart())
    }
    function removeHandler(index)
    {
        dispatch(removeItem(index))
    }
  return (
    <div className=' min-h-[100vh] bg-[#E5E7EB] '>
      <div className= ' mx-auto '>
            <h1 className='   text-center text-[30px] font-bold py-4 '>
                Cart  
                <span className= ' ml-4 ' onClick={clearHandler}>
           
                 <FontAwesomeIcon icon={faTrashCan} style={{color: "#ffaebd",}} />  
          
           </span>
            </h1>
          
      </div>

        <div>
                      {
            cartData.map(
                (items , index ) => 
                <div className=' flex items-center ' >
                    <FontAwesomeIcon icon={faDeleteLeft} className='h-[50px] relative left-[54px]' onClick={() => removeHandler(index)} style={{color: "#FFB6B9",}} /> 
                    <CartItems key={index}  list = {items} />
            </div> 
                
            )
           }
        </div>

    </div>
  )
}

export default Cart