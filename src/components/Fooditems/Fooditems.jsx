import React from "react";
import "./Fooditems.css";
import { Link } from "react-router-dom";

const Fooditems = () => {
  const scrollLeft = () => {
    const slider = document.querySelector(".items");
    if (slider) {
      slider.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const slider = document.querySelector(".items");
    if (slider) {
      slider.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Fooditems">
      <h1>What's on your mind?</h1>
      <div className="items-container">
        <div className="items">
          <Link to={"/South Indian"}>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"
              alt=""
            />
          </Link>
         
          <Link to={"/Pizzas"}>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"
              alt=""
            />
          </Link>
          <Link to={"/North Indian"}>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png"
              alt=""
            />
          </Link>
          <Link to={"/Chinese"}>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png"
              alt=""
            />
          </Link>
          <Link to={"/North Indian"}>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png"
              alt=""
            />
          </Link>
          <Link to={"/Biryani"}>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
              alt=""
            />
          </Link>
          <Link to={"/South Indian"}>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"
              alt=""
            />
          </Link>
          <Link to={"/Beverages"}>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png"
              alt=""
            />
          </Link>
          <Link to={"/Desserts"}>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="scroll-buttons">
        <button className="scroll-left" onClick={scrollLeft}></button>
        <button className="scroll-right" onClick={scrollRight}></button>
      </div>
    </div>
  );
};

export default Fooditems;
