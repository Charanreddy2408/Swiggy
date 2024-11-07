import React, { useState, useEffect } from 'react';
import "./Filterfood.css";
import Datafetch from '../Datafetch';
import Cardlayout from '../Cardlayout/Cardlayout';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Filterfood = () => {
  const { cuisine } = useParams();
  const [tempdata, settempdata] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const[loading,setLoading]=useState(true);

  const handleDataFetch = (data) => {
    settempdata(data);
    setfilterdata(data);
    setTimeout(() => setLoading(false), 2000);
  };

  useEffect(() => {
    filterrestaurant();
  }, [cuisine, tempdata]);

  const filterrestaurant = () => {
    let restaurant = [...tempdata];
    if (cuisine) {
      restaurant = restaurant.filter((filterData) =>
        filterData.info.cuisines.includes(cuisine)
      );
    }
    setfilterdata(restaurant);
  };

  return (
    <>
   
    <div className="Allrestaurants">
      <Datafetch onDataFetch={handleDataFetch} />
      <div className="restaurantslist">
        {loading?Array.from({ length: 15}).map((_, index) => (
            <Cardlayout key={index} loading={true} />
          )):(
        filterdata.map((restaurant, index) => (
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
      
    </div>
   
    </>
    
  );
};

export default Filterfood;
