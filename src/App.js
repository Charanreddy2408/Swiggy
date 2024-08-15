// App.js
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProviderComponent from "./components/Contextprovider"; 
import Fooditems from "./components/Fooditems/Fooditems";
import Navbar from "./components/Navbar/Navbar";
import Toprestaurants from "./components/Toprestaurants/Toprestaurants";
import Allrestaurants from "./components/Allrestaurants/Allrestaurants";
import Filtercard from "./components/Filtercard/Filtercard";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Filterfood from "./components/Filterfood/Filterfood";
import Offers from "./components/Offers/Offers";
import Help from "./components/Help/Help";
import Restaurantinfo from "./components/Restaurantinfo/Restaurantinfo";
import Cart from "./components/Cart/Cart";

function App() {
  const [filter, setFilter] = useState(false);

  return (
    <ContextProviderComponent>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/help" element={<Help />} />
            <Route path="/:cuisine" element={<Filterfood />} />
            <Route
              path="/restaurant/:name"
              element={<Restaurantinfo />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/*"
              element={
                <>
                  <Fooditems />
                  <Toprestaurants />
                  <Allrestaurants filter={filter} setFilter={setFilter} />
                  {filter && <Filtercard setFilter={setFilter} />}
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProviderComponent>
  );
}

export default App;
