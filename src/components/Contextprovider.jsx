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
console.log(restaurantMenu,"Ee")
      if (restaurantMenu.length>0) {
        setCurrentRestaurantMenu(restaurantMenu );
      } else {
        setCurrentRestaurantMenu([]);
      }
    
    }
  }, [restaurantName, restaurantname]);
  useEffect(()=>{
    console.log(currentRestaurantMenu,"Ee");
  },[])
  console.log("we",currentRestaurantMenu)
  const addToCart = (name, sectionId) => {
    setCurrentRestaurantMenu((prevRestaurant) => {
    
      if (!prevRestaurant || !prevRestaurant.menu) return prevRestaurant;
 
      const updatedMenu = prevRestaurant.menu.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.map((item) =>
              item.name === name ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        }
        return section;
      });

      return {
        ...prevRestaurant,
        menu: updatedMenu,
      };
    });
  };

  const removeFromCart = (name) => {
    setCurrentRestaurantMenu((prevMenu) =>
      prevMenu.map((section) => ({
        ...section,
        items: section.items.map((item) =>
          item.name === name && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      }))
    );
  };

  const getCartItemQuantity = (name) => {
    for (let sectionIndex = 0; sectionIndex < currentRestaurantMenu?.length; sectionIndex++) {
      const section = currentRestaurantMenu[sectionIndex];
      for (let itemIndex = 0; itemIndex < section.items?.length; itemIndex++) {
        const item = section.items[itemIndex];
        if (item.name === name) {
          return item.quantity;
        }
      }
    }
    return 0;
  };

  const toggleSection = (sectionId) => {
     let newMenudata =  menuData.map((section) =>
        section.id === sectionId
          ? { ...section, isOpen: !section.isOpen }
          : section
      )

      setMenuData(newMenudata)
    
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
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextProviderComponent;
