import React from 'react'
import ItemList from './ItemList'

const RestaurantMenuAccoridian = ({data , showItems , setShowIndex }) => {
  const listOfItems = data?.card?.card?.itemCards ;

  return (
    <div className='bg-[#FFB6B9]  w-9/12 rounded-md shadow-md mx-auto'>
      <div className='flex px-2  items-center cursor-pointer border-b-2 justify-between p-2' 
      onClick={() => 
          setShowIndex()
        } >
        {data?.card?.card?.title} <button > ⬇</button>     </div>

        <div>
            {
              showItems && 
              listOfItems.map((category  ) =>
               <ItemList
               key={category?.card?.info?.id} 
               data = {{...category}}
               
               /> )
            }
        </div>
    </div>
  )
}

export default RestaurantMenuAccoridian