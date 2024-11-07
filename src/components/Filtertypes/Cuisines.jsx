import React, { useContext } from 'react'
import "./Cuisines.css"
import { Context } from '../Contextprovider'
const Cuisines = () => {
  const{toggleCuisines}=useContext(Context);
  const handlecuisines=(e)=>{
   const {value}=e.target;
   toggleCuisines(value);
  }
  return (
    <div className='Cuisines'>
        <label>
        <input type="radio" name="Cuisined" value="South Indian"  onChange={handlecuisines}/> South Indian
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Sweets" onChange={handlecuisines} /> Sweets
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Desserts"  onChange={handlecuisines}/> Deserts
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Chaat"  onChange={handlecuisines}/> Chaat
      </label>
      <label> 
        <input type="radio" name="Cuisined" value="Snacks"  onChange={handlecuisines}/> Snacks
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Beverages" onChange={handlecuisines} /> Beverges
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Chinese"  onChange={handlecuisines}/> Chinese
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Juices"  onChange={handlecuisines}/> Juices
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Burgers" onChange={handlecuisines}/> Burgers
      </label>
      <label>
        <input type="radio" name="Cuisined" value="American" onChange={handlecuisines} /> American
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Fast Food"onChange={handlecuisines} /> Fast Food
      </label>
      <label>
        <input type="radio" name="Cuisined" value="North Indian" onChange={handlecuisines}/> NorthIndian
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Biryani" onChange={handlecuisines}/> Biryani
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Cafe" onChange={handlecuisines}/> Cafe
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Bakery" onChange={handlecuisines}/>Bakery
      </label>
      <label>
        <input type="radio" name="Cuisined" value="IceCream" onChange={handlecuisines}/> Ice Cream
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Indian" onChange={handlecuisines} /> Indian
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Kebabs" onChange={handlecuisines}/> Kebabs
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Tandoor" onChange={handlecuisines}/> Tandoor
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Haleem" onChange={handlecuisines}/> Haleem
      </label>
      <label>
        <input type="radio" name="Cuisined" value="Pizzas" onChange={handlecuisines}/> Pizzas
      </label>

      
    </div>
  )
}

export default Cuisines
