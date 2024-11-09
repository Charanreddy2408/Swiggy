import React, { useContext } from 'react'
import "./Ratings.css"
import { Context } from '../Contextprovider'
const Ratings = () => {
  const{toggleRatings}=useContext(Context);
  const handleratingchange=(e)=>{
const{value}=e.target;
toggleRatings(value);

  }
  return (
    <div className='Rating'>
      <label>
            <input type="radio" name="Rating" value="4.5+" onChange={handleratingchange} /> Ratings 4.5+
        </label>
        <label>
            <input type="radio" name="Rating" value="4.0+" onChange={handleratingchange} /> Ratings 4.0+
        </label>
        <label>
            <input type="radio" name="Rating" value="3.5+"  onChange={handleratingchange}/> Ratings 3.5+
        </label>
    </div>
  )
}

export default Ratings
