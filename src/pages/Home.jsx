import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import BookAppointment from "../components/BookAppointment";
function Home() {
  return (
    <div >
      <Hero/>
      <About />
      <BookAppointment />
    </div>
  );
}
export default Home;
