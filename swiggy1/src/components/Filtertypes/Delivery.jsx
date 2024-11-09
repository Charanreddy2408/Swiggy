import React, { useContext, useState } from 'react'
import "./Delivery.css"
import { Context } from '../Contextprovider'
const Delivery = () => {
  const {tempDelivery,toggleDelivery}=useContext(Context);
  const handledelivery=(e)=>{
    const {value}=e.target;
    toggleDelivery(value);
  }
  return (
    <div className='delivery'>
        <label>
            <input type="radio" name="delivery" value="fastdelivery" checked={tempDelivery==="fastdelivery"} onChange={handledelivery} /> FastDelivery
        </label>
      
    </div>
  )
}

export default Delivery
