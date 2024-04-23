import React from "react";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Review from "../Components/Review";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Hero />
      <Info />
      <Review />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
