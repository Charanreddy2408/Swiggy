import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import { Context } from "../Contextprovider";
import { useNavigate } from "react-router-dom";

// Reusable Card Component
const Card = ({ type, address, time }) => (
  <div className="card">
    <div className="card-header">{type}</div>
    <div className="card-address">{address}</div>
    <div className="card-time">{time}</div>
    <button className="card-button">DELIVER HERE</button>
  </div>
);

// Main CardContainer Component
const CardContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const { menuData, addToCart, removeFromCart, getCartItemQuantity,restaurantName,restaurantname } = useContext(Context);
  const navigate = useNavigate();

  // Retrieve login status and user information from local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));
    const storedUserInfo = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserInfo(storedUserInfo);
    }
  }, []);

  // Static list of delivery addresses
  const addresses = [
    { type: "Home", address: "High Rise Krishna Residency, Saroornagar, Telangana", time: "79 MINS" },
    { type: "Work", address: "Sanskriti School, Saroornagar, Telangana", time: "77 MINS" },
    { type: "Other", address: "Jain Ravi Gayatri Hights, HITEC City, Hyderabad", time: "75 MINS" },
    { type: "Other", address: "Hari Vihar Colony, Narayanguda, Hyderabad", time: "72 MINS" },
  ];

  // Get items in the cart

  const cartItems = restaurantname
  .filter((restaurant) => restaurant?.info?.name === restaurantName)  
  .flatMap((restaurant) => 
    restaurant.menu.map((section) =>
      section.items
        .filter((item) => getCartItemQuantity(item.name) > 0)  
        .map((item) => ({
          ...item,               
          sectionId: section.id  
        }))
    )
  )
  .flat();  

console.log(cartItems);



  // Calculate total cart amount
  const totalAmount = cartItems.flat().reduce(
    (total, item) => total + getCartItemQuantity(item.name) * item.price,
    0
  );

  // Handlers for item quantity
  const incrementItem = (name, sectionId) => addToCart(name, sectionId);
  const decrementItem = (name, sectionId) => removeFromCart(name, sectionId);

  // Navigation handlers for login and signup
  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <div className="cartspace">
       
      <div className="card-container">
        
        {/* User Profile Section */}
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

        {/* Address and Payment Section */}
        {isLoggedIn ? (
          <>
            <div className="address">
              <h1>Choose a delivery address</h1>
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
      <h1 style={{ color: "#f97c21" }}>CHECKOUT</h1>

        {cartItems.length > 0 ? (
          <>
            <div className="restaurant-info">
              {restaurantName ? (
                <div className="restaurant-details">
                  <h1>{restaurantName}</h1>
                </div>
              ) : (
                <p>Restaurant details not available.</p>
              )}
            </div>
            <div className="order-summary">
              <h3>Order Summary</h3>
              
              {cartItems.flat().map((item, index) => (
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
