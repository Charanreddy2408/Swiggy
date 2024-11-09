import React, { useState, useEffect } from 'react';
import Datafetch from '../Datafetch';
import "./Toprestaurants.css";
import Cardlayout from '../Cardlayout/Cardlayout';

const Toprestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDataFetch = (data) => {
    const limitedRestaurants = data.slice(0, 20);
    setRestaurants(limitedRestaurants);
    setTimeout(() => setLoading(false), 2000); // Set loading to false after 2 seconds
  };

  const scrollLeft = () => {
    const slider = document.querySelector(".restaurants");
    if (slider) {
      slider.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const slider = document.querySelector(".restaurants");
    if (slider) {
      slider.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='Toprestaurants'>
      <h1>Top restaurant chains in Hyderabad</h1>
      <hr />
      <Datafetch onDataFetch={handleDataFetch} />
      <div className="restaurants">
        {loading ? (
          Array.from({ length: 15}).map((_, index) => (
            <Cardlayout key={index} loading={true} />
          ))
        ) : (
          restaurants.map(restaurant => (
            <Cardlayout
              key={restaurant.info.id}
              name={restaurant.info.name}
              img={restaurant.info.imageId}
              locality={restaurant.info.locality}
              areaName={restaurant.info.areaName}
              costForTwo={restaurant.info.costForTwo}
              cuisines={restaurant.info.cuisines}
              avgRating={restaurant.info.avgRating}
            />
          ))
        )}
      </div>
      <div className="scroll-buttons">
        <button className="scroll-left" onClick={scrollLeft}>&#8249;</button>
        <button className="scroll-right" onClick={scrollRight}>&#8250;</button>
      </div>
    </div>
  );
}

export default Toprestaurants;
