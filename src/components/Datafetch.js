import React, { useEffect } from 'react';
import { Context } from "../components/Contextprovider";
import { useContext } from 'react';
const Datafetch = ({ onDataFetch,togglemenudata }) => {



  useEffect(() => {
    const fetchRestaurantsAndMenu = async () => {
      const [restaurantsResponse, menuDataResponse] = await Promise.all([
        fetch('http://localhost:3001/restaurants'),
        fetch('http://localhost:3001/menuData')
      ]);

      const restaurants = await restaurantsResponse.json();
      const menuData = await menuDataResponse.json();
      for(let i = 0 ;i<restaurants.length;i++){
        
      }
     
       const initializedMenuData = menuData?.map((restaurant) => ({
        ...restaurant,
        items: restaurant.items.map((item,index)=>{
          return {...item,quantity:0,restarentName : restaurants[index]?.info.name}
        }),
        isOpen:false
      }));
      if(togglemenudata)
      togglemenudata(initializedMenuData)
      
      const updatedRestaurants = restaurants.map((restaurant) => ({
        ...restaurant,
        menu: initializedMenuData
      }));

      onDataFetch(updatedRestaurants);
    };
   

    fetchRestaurantsAndMenu().catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);
  

  return null;
};
export default Datafetch;