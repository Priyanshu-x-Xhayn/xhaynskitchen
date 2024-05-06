import React from 'react'
import { img_url } from './Utils/Constant';

const CartItems = ({list}) => {
    
  return (
    <div className='mx-auto  bg-[#FFB6B9] w-9/12 px-3 py-3 border rounded-md '> 

       <div className='bg-[#eaedf2] font-mono px-2 '>
        <div className='font-bold text-lg '>
                {list?.card?.info?.name}
            </div>
           <div className='flex justify-between items-center '>
          <div className='flex gap-5 px-2 font-mono'>
                <div>
                        {list?.card?.info?.category}
                </div>
                ||
                <div>
                    ₹ {list?.card?.info?.price ? list?.card?.info?.price / 100 : list?.card?.info?.defaultPrice / 100 }
                </div>
                
          </div>
                <div>
                    <img src={img_url + list?.card?.info?.imageId} className = " rounded-lg " width={100} />
                </div>

           </div>
            <div className=' opacity-30 px-2 py-2  text-sm '>
                {list?.card?.info?.description}
            </div>
       </div>


        
    </div>
  )
}

export default CartItems ;