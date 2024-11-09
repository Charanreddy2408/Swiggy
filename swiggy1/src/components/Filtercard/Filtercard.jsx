import React, { useContext, useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import "./Filtercard.css";
import Sort from '../Filtertypes/Sort';
import Delivery from '../Filtertypes/Delivery';
import Cuisines from '../Filtertypes/Cuisines';
import Ratings from '../Filtertypes/Ratings';
import Veg from '../Filtertypes/Veg';
import { Context } from '../Contextprovider';

const Filtercard = ({ setFilter }) => {
  const { tempSort, tempDelivery, tempCuisines, tempRatings, tempVeg, handleSort, handleDelivery, handleCuisines, handleRatings, handleVeg } = useContext(Context);
  const [select, setSelect] = useState("sort");

  const handleClose = () => {
    setFilter(false); 
  };

  const handleSelect = (option) => {
    setSelect(option);
  };

  const handleApply = () => {
    handleSort(tempSort); 
    handleDelivery(tempDelivery);
    handleCuisines(tempCuisines);
    handleRatings(tempRatings);
    handleVeg(tempVeg);
    setFilter(false);
  };

  return (
    <div className='modal'>
      <div className='Filtercard'>
        <div className="filterhead">
          <p>Filter</p>
          <IoMdCloseCircleOutline onClick={handleClose} />
        </div>
        <div className="filtermain">
          <div className="filteroptions">
            <div className={`selectoption ${select === "sort" ? "active" : ""}`} onClick={() => handleSelect("sort")}>
              <p>Sort</p>
            </div>
            <div className={`selectoption ${select === "Delivery" ? "active" : ""}`} onClick={() => handleSelect("Delivery")}>
              <p>Delivery Time</p>
            </div>
            <div className={`selectoption ${select === "cuisines" ? "active" : ""}`} onClick={() => handleSelect("cuisines")}>
              <p>Cuisines</p>
            </div>
            <div className={`selectoption ${select === "Ratings" ? "active" : ""}`} onClick={() => handleSelect("Ratings")}>
              <p>Ratings</p>
            </div>
            <div className={`selectoption ${select === "veg" ? "active" : ""}`} onClick={() => handleSelect("veg")}>
              <p>Veg/Non-Veg</p>
            </div>
          </div>
          <div className="filtertypes">
            {select === "sort" && <Sort />}
            {select === "Delivery" && <Delivery />}
            {select === "cuisines" && <Cuisines />}
            {select === "Ratings" && <Ratings />}
            {select === "veg" && <Veg />}
          </div>
        </div>
        <button onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};

export default Filtercard;
