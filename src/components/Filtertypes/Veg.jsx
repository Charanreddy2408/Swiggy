import React, { useContext } from 'react'
import './Veg.css'
import { Context } from '../Contextprovider'
const Veg = () => {
  const{toggleVeg}=useContext(Context);
  const handlevegchange=(e)=>{
    const {value}=e.target;
    toggleVeg(value);
    
  }
  return (
    <div className='Veg'>
      <label>
        <input type="radio" name="Veg_Nonveg" value="Veg" onChange={handlevegchange} /> Pure Veg
      </label>
      <label>
        <input type="radio" name="Veg_Nonveg" value="NonVeg" onChange={handlevegchange} /> Non Veg
      </label>
    </div>
  )
}

export default Veg
