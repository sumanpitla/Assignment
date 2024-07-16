// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import Booking from "./components/Booking";
import PopularDestinations from "./components/PopularDestinations";
import GreatDeals from "./components/GreatDeals";
import FlightList from "./components/FlightList";
import Footer from "./components/Footer";
import EmailSignup from "./components/EmailSignup";

function App() {
  return (
    <div>
      <Navbar />
      <Booking />
      <PopularDestinations />
      <GreatDeals />
      <EmailSignup/>
      <FlightList />
      <Footer />

    </div>
  );
}

export default App;
