// Allrestaurants.js
import React, { useState, useContext, useEffect } from "react";
import Datafetch from "../Datafetch";
import "./Allrestaurants.css";
import Cardlayout from "../Cardlayout/Cardlayout";
import { IoFilter } from "react-icons/io5";
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Context } from "../Contextprovider";

const Allrestaurants = ({ filter, setFilter }) => {
  const { 
    sort, handleSort, tempSort, toggleSort,
    delivery, handleDelivery, tempDelivery, toggleDelivery,
    cuisines, handleCuisines, tempCuisines, toggleCuisines,
    ratings, handleRatings, tempRatings, toggleRatings,
    veg, handleVeg, tempVeg, toggleVeg 
  } = useContext(Context);

  const [restaurants, setRestaurants] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDataFetch = (data) => {
    setRestaurants(data);
    setOriginalData(data);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleFilter = () => {
    setFilter(!filter);
  };

  const parseCostForTwo = (costForTwo) => {
    const costMatch = costForTwo.match(/₹(\d+)/);
    return costMatch ? parseInt(costMatch[1], 10) : 0;
  };

  const applyFiltersAndSort = () => {
    let filteredData = [...originalData];
   
    if (cuisines) {
      filteredData = filteredData.filter(restaurant =>
        restaurant.info.cuisines.includes(cuisines)
      );
    }

    if (delivery === "fastdelivery") {
      filteredData = filteredData.sort((a, b) =>
        a.info.sla.deliveryTime - b.info.sla.deliveryTime
      );
    }

    if (sort === "low_to_high") {
      filteredData = filteredData.sort((a, b) =>
        parseCostForTwo(a.info.costForTwo) - parseCostForTwo(b.info.costForTwo)
      );
    } else if (sort === "high_to_low") {
      filteredData = filteredData.sort((a, b) =>
        parseCostForTwo(b.info.costForTwo) - parseCostForTwo(a.info.costForTwo)
      );
    }

    if (ratings) {
      const ratingThreshold = parseFloat(ratings);
      filteredData = filteredData.filter(restaurant =>
        restaurant.info.avgRating >= ratingThreshold
      ).sort((a, b) => a.info.avgRating - b.info.avgRating);
    }

    if (veg) {
      filteredData = filteredData.filter(restaurant => {
        if (veg === "veg") {
          return restaurant.info.badges?.imageBadges?.some(badge => badge.description === "pureveg");
        } else if (veg === "NonVeg") {
          return !restaurant.info.badges?.imageBadges?.some(badge => badge.description === "pureveg");
        }
        return true;
      });
    }

    setRestaurants(filteredData);
  };

  const handleClose = () => {
    setRestaurants(originalData);
    handleSort("");
    handleDelivery("");
    handleCuisines("");
    handleRatings("");
    handleVeg("");
    toggleSort("");
    toggleDelivery("");
    toggleCuisines("");
    toggleRatings("");
    toggleVeg("");
  };

  useEffect(() => {
    setLoading(true);
    applyFiltersAndSort();
    setLoading(false); 
  }, [sort, delivery, cuisines, ratings, veg]);

  return (
    <div className="Allrestaurants">
      <div className="filterhandle">
        <button onClick={handleFilter}>
          Filter <IoFilter />
        </button>
        {(sort || delivery || cuisines || ratings || veg) ? (
          <IoMdCloseCircleOutline className="cross" onClick={handleClose} />
        ) : null}
      </div>
      <h1>Restaurants with online food delivery</h1>
      <hr />
      <Datafetch onDataFetch={handleDataFetch} />
      <div className="restaurantslist">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Cardlayout key={index} loading={true} />
          ))
        ) : restaurants.length === 0 ? (
          <p>No restaurants match the selected filters.</p>  
        ) : (
          restaurants.map((restaurant, index) => (
            <Cardlayout 
              key={index}
              id={restaurant.info.id}
              name={restaurant.info.name}
              img={restaurant.info.imageId}
              locality={restaurant.info.locality}
              areaName={restaurant.info.areaName}
              costForTwo={restaurant.info.costForTwo}
              cuisines={restaurant.info.cuisines}
              avgRating={restaurant.info.avgRating}
              discountInfo={restaurant.info.aggregatedDiscountInfoV3} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Allrestaurants;
