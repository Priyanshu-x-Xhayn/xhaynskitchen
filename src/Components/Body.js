import React, { useContext } from 'react';
import "./Body.css";
import Shimmer from './Shimmer';
import Card, { withPromoted } from './Card';
import { swiggyApi } from './Utils/Constant';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userContext from './Utils/userContext';
// import { withPromoted } from './Card';

const Body = () => {
    const [searchValue, setSearchValue] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [shimmer, setShimmer] = useState(false);
    const RestaurentPromoted = withPromoted(Card);
    let val ;
    const {loggedInUser , setUser} = useContext(userContext)


    const fetchData = async () => {
        setShimmer(true);
        const data = await fetch(swiggyApi);
        const output = await data.json();
        setListOfRestaurants(output?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(output?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setShimmer(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (shimmer) return <Shimmer />


    return (
        <div className="body-container mx-auto px-4 md:px-8 lg:px-16">
            <div className="search-bar mt-10 flex items-center justify-between gap-2">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="p-2 rounded border border-gray-300 focus:outline-none  focus:border-blue-500 flex-grow"
                />
                <button
                    onClick={() => {
                        let val = searchValue.toLowerCase();
                        let arr = listOfRestaurants.filter((res) => {
                            return res.info.cuisines.map((cuisine) => cuisine.toLowerCase()).includes(val);
                        });
                        setFilteredData(arr);
                    }}
                    className="ml-2 px-4 py-2 bg-[#f15e99] hover:bg-[#DE2E73] text-white rounded  focus:outline-none"
                >
                    Search
                </button>

               
               <div className='flex gap-2 '>
               <input 
                                   className="p-2 rounded border border-gray-300 focus:outline-none  focus:border-blue-500 flex-grow"

                type='text' 
                placeholder=' Enter your Name'
                onChange={(e)=> {
                     val = e.target.value
                }}
                />
                <button  className="ml-2 px-4 py-2 bg-[#f15e99] hover:bg-[#DE2E73] text-white rounded  focus:outline-none"

                 onClick={ () => setUser(val)}>
                    Enter
                </button>
                <button
                    onClick={() => {
                        let arr = listOfRestaurants.filter((res) => {
                            return parseFloat(res.info.avgRatingString) > 4.3;
                        });
                        setFilteredData(arr);
                    }}
                    className="ml-2 px-4 py-2 bg-[#f15e99] text-white  hover:bg-[#DE2E73] rounded  focus:outline-none"
                >
                    Top Rated
                </button>
               </div>
            </div>
            <div className=" cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {filteredData.map((restaurant) => (
                    <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} >
                     {restaurant.info.isOpen ? <RestaurentPromoted restaurant={{ ...restaurant.info }}   /> :  <Card restaurant={{ ...restaurant.info }} /> }
                        
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Body;
