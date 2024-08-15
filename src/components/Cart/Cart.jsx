import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import { Context } from "../Contextprovider";

const Card = ({ type, address, time }) => {
  return (
    <div className="card">
      <div className="card-header">{type}</div>
      <div className="card-address">{address}</div>
      <div className="card-time">{time}</div>
      <button className="card-button">DELIVER HERE</button>
    </div>
  );
};

const CardContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const { menuData } = useContext(Context);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserInfo(userInfo);
    }
  }, []);

  const addresses = [
    {
      type: "Home",
      address:
        "High Rise Krishna Residency, Pochhama Basti, Saroornagar, Telangana 500035, India",
      time: "79 MINS",
    },
    {
      type: "Work",
      address:
        "Sanskriti School, Santosh Arcade, Pochhama Basti, Saroornagar, Telangana, India",
      time: "77 MINS",
    },
    {
      type: "Other",
      address:
        "2c, Jain Ravi Gayatri Hights, Jubilee Enclave, HITEC City, Hyderabad, Telangana 500081, India",
      time: "75 MINS",
    },
    {
      type: "Other",
      address:
        "Bzb, Hari Vihar Colony, Bhawani Nagar, Narayanguda, Hyderabad, Telangana 500029, India (Krishna Sai Sadan)",
      time: "72 MINS",
    },
  ];

  const cartItems = menuData.flatMap((section) =>
    section.items.filter((item) => item.quantity > 0)
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

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
              <h3>Account</h3>
              <p>
                To place your order now, log in to your existing account or sign
                up.
              </p>
              <button className="login">Have an Account? Login</button>
              <button className="Signup">New to Swiggy? Signup</button>
            </div>
          )}
        </div>
        {isLoggedIn ? (
          <div className="address">
            <h2>Choose a delivery address</h2>
            <p>Multiple addresses in this location</p>
            <div className="cards">
              {addresses.map((address, index) => (
                <Card key={index} {...address} />
              ))}
            </div>
          </div>
        ) : (
          <div className="address-b">
            <h3>Delivery Address</h3>
          </div>
        )}
        {isLoggedIn ? (
          <div className="paymentsection">
            <h2>Payment</h2>
            <button>PROCEED TO PAY</button>
          </div>
        ) : (
          <div className="payment">
            <h3>Payment</h3>
          </div>
        )}
      </div>
      <div className="checkout">
        {cartItems.length > 0 ? (
          <>
            <div className="restaurant-info">
              <div className="restaurant-details">
                <h3>{cartItems[0].restaurantName}</h3>
                <p>
                  {cartItems[0].locality}, {cartItems[0].areaName}
                </p>
              </div>
            </div>
            <div className="order-summary">
              <h3>Order Summary</h3>
              {cartItems.map((item, index) => (
                <div className="order-item" key={index}>
                  <img
                    src={item.image}
                    alt="Restaurant"
                    className="restaurant-image"
                  />
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span className="order-price">
                    ${item.price * item.quantity}
                  </span>
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
