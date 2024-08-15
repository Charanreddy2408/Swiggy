import React, { useState } from 'react';
import "./Offers.css";
import Cardlayout from '../Cardlayout/Cardlayout';
import Datafetch from '../Datafetch';
import Footer from '../Footer/Footer';

const Offers = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const[loading,setLoading]=useState(true);

  const handleDataFetch = (data) => {
    const filteredData = data.filter(
      (restaurant) => restaurant.info.aggregatedDiscountInfoV3
    );
    setRestaurants(filteredData);
    setOriginalData(filteredData);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className='Offers'>
      <Datafetch onDataFetch={handleDataFetch} />
      <div className="restaurantslist">
        {loading ? (
          Array.from({ length: 15}).map((_, index) => (
            <Cardlayout key={index} loading={true} />
          ))
        ):(
        restaurants.map((restaurant, index) => (
          <Cardlayout
            key={index}
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
      )
    }
      </div>
      <Footer/>
    </div>
    
  );
};

export default Offers;
