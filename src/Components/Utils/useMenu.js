import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { menu_api } from "./Constant";

export const useMenu = () => {
    const [menuData, setMenuData] = useState([]);
    const [restaurantInfo , setrestaurantInfo] = useState([]);
    const { resid } = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch(menu_api + resid);
            if (!response.ok) {
                throw new Error('Failed to fetch menu data');
            }
            const data = await response.json();

            setMenuData(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            setrestaurantInfo(data?.data?.cards[2]?.card?.card?.info)
            console.log(menu_api + resid )
        } catch (error) {
            console.error('Error fetching menu data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [resid]);

    useEffect(() => {

    }, [menuData]); // Log menuData whenever it changes

    return {menuData , restaurantInfo } ;
};
