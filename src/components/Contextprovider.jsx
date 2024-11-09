import React, { createContext, useState, useEffect } from "react";
import Datafetch from "./Datafetch";


export const Context = createContext();

const ContextProviderComponent = ({ children }) => {
  const[restaurantName,setRestaurantName]=useState("");
  const [menuData, setMenuData] = useState([]);
  const [restaurantname, setRestaurantname] = useState([]);
  const [currentRestaurantMenu, setCurrentRestaurantMenu] = useState([]);
  const [sort, setSort] = useState("");
  const [tempSort, setTempSort] = useState("");
  const [delivery, setDelivery] = useState("");
  const [tempDelivery, setTempDelivery] = useState("");
  const [cuisines, setCuisines] = useState("");
  const [tempCuisines, setTempCuisines] = useState("");
  const [ratings, setRatings] = useState("");
  const [tempRatings, setTempRatings] = useState("");
  const [veg, setVeg] = useState("");
  const [tempVeg, setTempVeg] = useState("");
  
  const handleDataFetch = (data) => {
  
    setRestaurantname(data);
  };

  
  useEffect(() => {
    if (restaurantname?.length > 0 && restaurantName) {

      const restaurantMenu = restaurantname.find(
        (restaurant) => restaurant?.info?.name === restaurantName
      );
      if (restaurantMenu) {
        setCurrentRestaurantMenu(restaurantMenu.menu);
      } else {
       
        setCurrentRestaurantMenu([]);
      }
    
    }
  }, [restaurantName, restaurantname]);


  function toUpdateRestarentMenuData(updateMenudata){
      
        let updatedrestarent = restaurantname.map((res)=>{
          if(res?.info.name===restaurantName){
            return {
              ...res,
              menu:updateMenudata
            }
          }
          else {
            return res
          }
        })


      setRestaurantname(updatedrestarent)
      console.log(restaurantname,"mjk")
  }

  const addToCart = (name, sectionId) => {
  
   let updatedmenudat =  currentRestaurantMenu.map((section)=>{
    console.log(sectionId,"jij")
      if(section.id===sectionId){
        return {
          ...section,
          items : section.items.map((item)=>{
            if(item.name===name){
              
              return {
                ...item,
                count: item.count ? item.count + 1 : 1
              }
            }
            else {
              return item
            }
          })
        }
      }
      else {
        return section
      }
    })
    setMenuData(updatedmenudat)
    toUpdateRestarentMenuData(updatedmenudat)
  
  };
  const totalQuantity = () => {
 
    if (!currentRestaurantMenu || currentRestaurantMenu.length === 0) {
      return 0;
    }
  
    let total = 0;
  

    currentRestaurantMenu.forEach((section) => {
      
      section.items.forEach((item) => {
       
        total += item.count || 0;
      });
    });
  
    return total; 
  };
  
  const totalItemsInCart = totalQuantity();



  
  const removeFromCart = (name, sectionId) => {

   let updatedmenudat =  currentRestaurantMenu.map((section)=>{
      if(section.id===sectionId){
        return {
          ...section,
          items : section.items.map((item)=>{
            if(item.name===name){
            
              return {
                ...item,
                count: item.count ? item.count -1 : 1
              }
            }
            else {
              return item
            }
          })
        }
      }
      else {
        return section
      }
    })
    setMenuData(updatedmenudat)
    toUpdateRestarentMenuData(updatedmenudat)
  
  };
 

  const getCartItemQuantity = (name) => {
    for (let sectionIndex = 0; sectionIndex < currentRestaurantMenu?.length; sectionIndex++) {
      const section = currentRestaurantMenu[sectionIndex];
      for (let itemIndex = 0; itemIndex < section.items?.length; itemIndex++) {
        const item = section.items[itemIndex];
        if (item.name === name) {
          return item.count || 0; 
        }
      }
    }
    return 0;
  };

  

  const toggleSection = (title,name) => {
  
    let updatedrestarent = restaurantname.map((res)=>{
      if(res?.info.name===name){

        return {
          ...res,
          menu: res.menu.map((item)=>{
            if(item.section===title){
                return {
                  ...item,
                  isOpen: item.isOpen ? !item.isOpen : true
                }
            }
            else{
              return item
            }
          })
        }
      }
      else {
        return res
      }
    })

  

  setRestaurantname(updatedrestarent)
    
  };

  const toggleSort = (value) => setTempSort(value);
  const handleSort = (value) => setSort(value);

  const toggleDelivery = (value) => setTempDelivery(value);
  const handleDelivery = (value) => setDelivery(value);

  const toggleCuisines = (value) => setTempCuisines(value);
  const handleCuisines = (value) => setCuisines(value);

  const toggleRatings = (value) => setTempRatings(value);
  const handleRatings = (value) => setRatings(value);

  const toggleVeg = (value) => setTempVeg(value);
  const handleVeg = (value) => setVeg(value);
  const handleparam = (value) => setRestaurantName(value);
const togglemenudata = (value) => setMenuData(value);

  return (
    <>
      <Datafetch onDataFetch={handleDataFetch} togglemenudata={togglemenudata}/>
      <Context.Provider
        value={{
          sort,
          handleSort,
          tempSort,
          toggleSort,
          delivery,
          handleDelivery,
          tempDelivery,
          toggleDelivery,
          cuisines,
          handleCuisines,
          tempCuisines,
          toggleCuisines,
          ratings,
          handleRatings,
          tempRatings,
          toggleRatings,
          veg,
          handleVeg,
          tempVeg,
          toggleVeg,
          addToCart,
          removeFromCart,
          getCartItemQuantity,
          menuData,
          currentRestaurantMenu,
          toggleSection,
          handleparam,
          togglemenudata,
          totalItemsInCart,
          addToCart,
          removeFromCart,
          restaurantName,
          restaurantname,
          restarents:restaurantname
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextProviderComponent;
