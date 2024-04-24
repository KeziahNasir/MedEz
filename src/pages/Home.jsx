import React from "react";
import Hero from "../components/Hero";
import SearchDoctors from "../components/SearchDoctors";
import About from "../components/About";
import BookAppointment from "../components/BookAppointment";
function Home() {
  return (
    <div >
      <Hero/>
      <SearchDoctors/>
      <About />
      <BookAppointment />
    </div>
  );
}
export default Home;
