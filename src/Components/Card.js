import React from 'react';
import { img_url } from "./Utils/Constant";
import { useState } from 'react';
import "./Card.css"; // Import custom CSS file

const Card = ({restaurant}) => {
    console.log(restaurant)
    let name = restaurant.name;
    let cloudinaryImageId = restaurant.cloudinaryImageId;
    let locality = restaurant.locality;
    let areaName = restaurant.areaName;
    let cuisines = restaurant.cuisines;
    let costForTwo = restaurant.costForTwo;
    let avgRatingString = restaurant.avgRatingString;
    let isOpen = restaurant.isOpen;

    const [showAllCuisines , setShowAllCuisines] = useState(false);
    let displayedCuisines = showAllCuisines ? cuisines : cuisines.slice(0,5) ;


  return (
    <div className="card-container">
    <div className="card bg-[#f9cacb] p-4 hover:bg-[#8fb5f3] shadow-md rounded-md overflow-hidden w-64 transition duration-900 ease-in-out transform hover:scale-105">
    <img src={`${img_url}${cloudinaryImageId}`} alt={name} className="w-full rounded-lg h-32 object-cover" />
    <div className="p-2">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 mb-1">{locality}, {areaName}</p>
        <p className="text-gray-600 mb-1">
            Cuisines: {displayedCuisines.join(', ')}
            {cuisines.length > 5 && !showAllCuisines && (
                <div 
                    onClick={() => setShowAllCuisines(true)}
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                    Show More
                </div>
            )}
        </p>
        <p className="text-gray-600 mb-1">Cost for two: {costForTwo}</p>
        <p className="text-gray-600 mb-1">Rating: {avgRatingString}</p>
        
    </div>
</div>
</div>

  );
};

export const withPromoted = (Card) => {
    return (props) => {
        
        const {restaurant} = props ;
        return (
            <div className='relative'>
                
                <Card restaurant = {{...restaurant}}/>
                <span className='p-2 top-0 absolute transition duration-900 ease-in-out transform hover:scale-105 bg-[#FFB6B9] text-white rounded-lg '>
                    Open
                </span>
            </div>
        )
    }
}

export default Card;
