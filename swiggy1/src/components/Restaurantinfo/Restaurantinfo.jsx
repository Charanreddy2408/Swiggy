import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Restaurantinfo.css";
import Datafetch from "../Datafetch";
import { MdDeliveryDining } from "react-icons/md";
import Menuitems from "../Menuitems/Menuitems";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Context } from "../Contextprovider";

const Restaurantinfo = () => {
  const { name } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    addToCart,
    removeFromCart,
    getCartItemQuantity,
    toggleSection,
    menuData,
    restarents
  } = useContext(Context);

  const handleDataFetch = (data) => {
    setRestaurants(data);
    setLoading(false);
  };

  const restarentMenu = restarents.find((restarent)=>{return restarent.info.name===name})
  

  useEffect(() => {
    if (restaurants.length > 0) {
      const selectedRestaurant = restaurants.find(
        (restaurant) => restaurant.info.name === name
      );
      setRestaurant(selectedRestaurant);
    }
  }, [name, restaurants]);

  const Section = ({ id, title, name, children, isOpen }) => {
   
    return (
      <div className="section">
        <h3 className="menusection" onClick={() => toggleSection(title,name)}>
          {title} {isOpen ? <IoIosArrowDropup size={30} /> : <IoIosArrowDropdown size={30} />}
        </h3>
        {isOpen && <div className="section-content">{children}</div>}
        <hr />
      </div>
    );
  };

  return (
    <div>
      <Datafetch onDataFetch={handleDataFetch} />
      {loading ? (
        <div>Loading...</div>
      ) : !restaurant ? (
        <div>No restaurant data found.</div>
      ) : (
        <>
          <div className="restaurantname">{restaurant.info.name}</div>
          <div className="infocard">
            <div className="information">
              <p className="rating">
                Rating: {restaurant.info.avgRating} ({restaurant.info.totalRatingsString})
              </p>
              <p className="cost">Cost for Two: {restaurant.info.costForTwo}</p>
            </div>
            <p className="cuisines">{restaurant.info.cuisines.join(" ")}</p>
            <hr />
            <div className="location">
              <p className="locality">Outlet: {restaurant.info.locality}</p>
              <p className="Area">Area: {restaurant.info.areaName}</p>
              <p className="deliverytime">{restaurant.info.sla.slaString}</p>
            </div>
            <hr />
            <div className="deliverytime">
              <MdDeliveryDining size={20} />
              <p className="timestring">{restaurant.info.sla.lastMileTravelString}</p>
            </div>
          </div>
        { console.log(restarentMenu.menu,"k")}
          {restarentMenu.menu && restarentMenu.menu.length > 0 ? (
            <div className="menu">
              <h2>Menu</h2>
             
              {restarentMenu.menu.map((section) => (
                
                <Section name={name} key={section.id} id={section.id} title={section.section} isOpen={section.isOpen}>
                
                  <div className="menu-items">
                    {section.items.map((item, index) => (
                      <Menuitems
                        key={index}
                        id={section.id}
                        count={item.count}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        rating={item.rating}
                        image={item.image}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        quantity={getCartItemQuantity(item.name)}
                      />
                    ))}
                  </div>
                </Section>
              ) )}
            </div>
          ) : (
            <div>No menu data available</div>
          )}
        </>
      )}
    </div>
  );
};

export default Restaurantinfo;
