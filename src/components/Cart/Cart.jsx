import React, { useState, useEffect, useContext } from "react";
import "./Cart.css"; 
import { Context } from "../Contextprovider";
import { useNavigate } from "react-router-dom";

// Card component for displaying delivery addresses
const Card = ({ type, address, time }) => (
  <div className="card">
    <div className="card-header">{type}</div>
    <div className="card-address">{address}</div>
    <div className="card-time">{time}</div>
    <button className="card-button">DELIVER HERE</button>
  </div>
);

// Main CardContainer component
const CardContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const { menuData, addToCart, removeFromCart, getCartItemQuantity,restaurantname} = useContext(Context);
  const navigate = useNavigate();

  // Check local storage for login status and user info
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserInfo(userInfo);
    }
  }, []);

  // Sample addresses for delivery
  const addresses = [
    {
      type: "Home",
      address: "High Rise Krishna Residency, Pochhama Basti, Saroornagar, Telangana 500035, India",
      time: "79 MINS",
    },
    {
      type: "Work",
      address: "Sanskriti School, Santosh Arcade, Pochhama Basti, Saroornagar, Telangana, India",
      time: "77 MINS",
    },
    {
      type: "Other",
      address: "2c, Jain Ravi Gayatri Hights, Jubilee Enclave, HITEC City, Hyderabad, Telangana 500081, India",
      time: "75 MINS",
    },
    {
      type: "Other",
      address: "Bzb, Hari Vihar Colony, Bhawani Nagar, Narayanguda, Hyderabad, Telangana 500029, India (Krishna Sai Sadan)",
      time: "72 MINS",
    },
  ];

  // Get items from menuData that are in the cart
  const cartItems = menuData.flatMap(
    (section) => section.items.filter((item) => getCartItemQuantity(item.name) > 0)
  );

  // Check if cartItems contains restaurant information
  console.log(cartItems);

  // Calculate total amount of the cart
  const totalAmount = cartItems.reduce(
    (total, item) => total + getCartItemQuantity(item.name) * item.price,
    0
  );

  // Increment item count in cart
  const incrementItem = (name, sectionId) => {
    addToCart(name, sectionId); // Directly using the addToCart function from context
  };

  // Decrement item count in cart
  const decrementItem = (name, sectionId) => {
    removeFromCart(name, sectionId); 
  };

  // Navigation handlers for login and signup
  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");
  return (
    
    <div className="cartspace">
      <div className="card-container">
        <div className="profile-section">
          <div className="profile-icon"></div>
          {isLoggedIn && userInfo ? (
            <div className="userinfo">
              <h3>Logged in</h3>
              <h2>Hello {userInfo.name}</h2>
            </div>
          ) : (
            <div className="profile-info">
              <h2>Account</h2>
              <p>To place your order now, log in to your existing account or sign up.</p>
              <button className="login" onClick={handleLogin}>Have an Account? Login</button>
              <button className="signup" onClick={handleSignup}>New to Swiggy? Signup</button>
            </div>
          )}
        </div>
        {isLoggedIn ? (
          <>
            <div className="address">
              <h2>Choose a delivery address</h2>
              <p>Multiple addresses in this location</p>
              <div className="cards">
                {addresses.map((address, index) => (
                  <Card key={index} {...address} />
                ))}
              </div>
            </div>
            <div className="paymentsection">
              <h2>Payment</h2>
              <button>PROCEED TO PAY</button>
            </div>
          </>
        ) : (
          <>
            <div className="address-b">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment">
              <h3>Payment</h3>
            </div>
          </>
        )}
      </div>
      
      <div className="checkout">
        
        {cartItems.length > 0 ? (
          <>
          
            <div className="restaurant-info">
              {console.log(cartItems,"jmk")}
              {cartItems[0].restarentName? (
                <div className="restaurant-details">
                  <h1>{cartItems[0].restarentName }</h1>
                </div>
              ) : (
                <p>Restaurant details not available.</p>
              )}
            </div>
            <div className="order-summary">
              <h3>Order Summary</h3>
              {cartItems.map((item, index) => (
                
                <div className="order-item" key={index}>
                  <img src={item.image} alt="Restaurant" className="restaurant-image" />
                  <p>{item.restaurantName}</p>
                  <span>{item.name} x {getCartItemQuantity(item.name)}</span>
                  <div className="quantity-controls">
                    <button onClick={() => decrementItem(item.name, item.sectionId)}>-</button>
                    <span>{getCartItemQuantity(item.name)}</span>
                    <button onClick={() => incrementItem(item.name, item.sectionId)}>+</button>
                  </div>
                  <span className="order-price">${(item.price * getCartItemQuantity(item.name)).toFixed(2)}</span>
                </div>
              ))}

              <div className="total-amount">
                <span>TO PAY</span>
                <span className="total-price">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </>
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
