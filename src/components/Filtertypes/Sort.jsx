import React, { useContext, useState } from 'react';
import { Context } from '../Contextprovider';
import "./Sort.css";

const Sort = () => {
  const { tempSort, toggleSort } = useContext(Context);
  const handleSortChange = (event) => {
    const { value } = event.target;
    toggleSort(value);
    
  };

  return (
    <div className='sort'>
      <label>
        <input
          type="radio"
          name="cost"
          value="low_to_high"
          checked={tempSort === "low_to_high"}
          onChange={handleSortChange}
        />
        Cost: Low to High
      </label>
      <label>
        <input
          type="radio"
          name="cost"
          value="high_to_low"
          checked={tempSort === "high_to_low"}
          onChange={handleSortChange}
        />
        Cost: High to Low
      </label>
    </div>
  );
};

export default Sort;
