import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import "./Cardlayout.css";

const Cardlayout = ({ id, name, img, locality, areaName, costForTwo, cuisines, avgRating, discountInfo, loading }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/restaurant/${name}`);
  };

  if (loading) {
    return (
      <div className='Cardlayout' >
        <div className="image-container shimmer-effect"></div>
        <div className="shimmer-content">
          <div className="shimmer-text shimmer-effect shimmer-title"></div>
          <div className="shimmer-rating shimmer-effect"></div>
          <div className="shimmer-text shimmer-effect"></div>
          <div className="shimmer-text shimmer-effect"></div>
          <div className="shimmer-text shimmer-effect"></div>
          <div className="shimmer-text shimmer-effect"></div>
        </div>
      </div>
    );
  }

  return (
    <div className='Cardlayout' onClick={handleCardClick}>
      <div className="image-container">
        {discountInfo && (
          <div className="discount-info">
            <p className="discount-header">{discountInfo.header}</p>
            <p className="discount-subheader">{discountInfo.subHeader}</p>
          </div>
        )}
        <img src={img} alt={name} />
      </div>
      <h1>{name}</h1>
      <div className="rating">
        <FaStar size={18} />
        <p>{avgRating}</p>
      </div>
      <p>Locality: {locality}</p>
      <p>Area: {areaName}</p>
      <p>Cost for Two: {costForTwo}</p>
      <p>Cuisines: {cuisines.join(', ')}</p>
    </div>
  );
}

export default Cardlayout;
