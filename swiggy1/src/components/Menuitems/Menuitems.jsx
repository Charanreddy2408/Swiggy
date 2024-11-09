import React, { useContext, useEffect } from "react";
import { Context } from "../Contextprovider";
import "./Menuitems.css";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Menuitems = ({ name, price, description, rating, image, id ,count}) => {
  const { addToCart, removeFromCart, getCartItemQuantity, handleparam } = useContext(Context);
  const { name: restaurantName } = useParams(); 
  const quantity = getCartItemQuantity(name);

  const handleIncrement = (e) => {
    console.log(name,id,"jinmk")
    e.stopPropagation();
    addToCart(name, id);
  };

  useEffect(() => {
    handleparam(restaurantName);
  }, [restaurantName, handleparam]);

  const handleDecrement = (e) => {
    e.stopPropagation();
    if (quantity > 0) {
      removeFromCart(name, id);
    }
  };

  return (
    <div className="menucard">
      <div className="info">
        <h3>{name}</h3>
        <span className="price">${price}</span>
        <span className="rating">
          <FaStar color="green" /> {rating}
        </span>
        <p>{description}</p>
      </div>
      <div className="image">
        <img className="foodimage" src={image} alt={`${name} image`} />
        <div className="cart">
          {!count  ? (
            <button className="add-button" onClick={handleIncrement}>
              ADD
            </button>
          ) : (
            <div className="quantity-control">
              <button onClick={handleDecrement} className="quantity-button">
                -
              </button>
              <span className="quantity-display">{count}</span>
              <button onClick={handleIncrement} className="quantity-button">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Menuitems;