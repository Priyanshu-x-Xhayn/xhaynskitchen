import React from 'react';
import { useMenu } from './Utils/useMenu';
import RestaurantMenuAccoridian from './RestaurantMenuAccoridian';
import { useState } from 'react';
import GlobalShimmer from './GlobalShimmer';


const RestaurantMenu = () => {
    const {menuData , restaurantInfo } = useMenu();
    const [showIndex , setShowIndex ] = useState(0);



    const list = menuData &&  menuData.filter((list) => 
        list?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    if (restaurantInfo.length === 0) {
        return <GlobalShimmer/>;
    }

    return (
        <div className='w-full min-h-[100vh] bg-[#E5E7EB] '>
          <div className=' w-9/12 my-10 mx-auto text-center bg-[#E5E7EB]'  >
          <h2 className=''>
                {restaurantInfo && restaurantInfo.name}
            </h2>

            <p>
            {restaurantInfo && restaurantInfo.cuisines ? `Cuisines: ${restaurantInfo.cuisines.join(" , ")}` : ''}

</p>


            <p>
                {restaurantInfo && restaurantInfo.costForTwoMessage}
            </p>

            <div className='mt-5'>
            {
                list && list.map(( category , index ) => 
                <RestaurantMenuAccoridian 
                key={category?.card?.card?.title} 
                data = {{...category}}
                showItems = {index === showIndex ? true : false }
                setShowIndex = { ()  => {
                    index === showIndex ? setShowIndex(null) :
                    setShowIndex(index)
                }

                }
                /> )
            }
            </div>

          </div>
        
            
        </div>
    );
};

export default RestaurantMenu;
