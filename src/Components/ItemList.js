import React from 'react'
import { img_url } from './Utils/Constant'
import { useDispatch } from 'react-redux'
import { addItem } from './Utils/cartSlice';


const ItemList = ({data}) => {
    const dispatch = useDispatch();
    function addHandler(data)
    {
        dispatch(addItem(data)) ;
        
    }
  return (
  <div>
      <div className='border-b-2 shadow-sm py-2  px-2 w-12/12 rounded-lg '>
        <div className=' py-2 mx-auto flex items-center  pl-4 bg-[#E5E7EB]'>
           <div className='text-left w-9/12 flex flex-col'>
            <div>
                    {data?.card?.info?.name}
                </div>
                <div className='opacity-[80%]'>
                    Price :  ₹
                    {
                        
                        data?.card?.info?.price ? data?.card?.info?.price / 100  :  data?.card?.info?.defaultPrice / 100
                    }
                </div>

                <div className='opacity-[60%] text-sm ' >
                    {
                        data?.card?.info?.description
                    }
                </div>
           </div>

           <div className='w-[105px] my-2 h-[80px] bg-[#E5E7EB] mx-auto rounded-lg flex relative items-center  '>
            <img src={img_url + data?.card?.info?.imageId} className='w-[80px]  mx-auto rounded-lg px-1 text-center  ' />
            <button className='absolute left-[30%] bg-black px-3 bg-opacity-70 rounded-lg  text-white bottom-1'
            onClick={() => addHandler(data)}> Add </button>
           </div>
            
        </div>
    </div>
    </div>
  )
}

export default ItemList