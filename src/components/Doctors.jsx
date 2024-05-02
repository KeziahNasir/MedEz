import React from "react";
import { useState } from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../assets/profile-1.png";
import profile2 from "../assets/profile-2.png";
import profile3 from "../assets/profile-3.png";
import profile4 from "../assets/profile-4.png";
import "../styles/Doctor.css";


const doctorsData = [
  {
    img: profile1,
    name: "Dr. Roseline Anyango",
    title: "General Surgeons",
    stars: "4.9",
    reviews: "1800",
  },
  {
    img: profile2,
    name: "Dr. Zuna Jacobs",
    title: "Hematologists",
    stars: "4.8",
    reviews: "700",
  },
  {
    img: profile3,
    name: "Dr. Jenny Rimui",
    title: "Endocrinologists",
    stars: "4.7",
    reviews: "450",
  },
  {
    img: profile4,
    name: "Dr. Albert Ololoip",
    title: "Hematologists",
    stars: "4.8",
    reviews: "500",
  },
];

function Doctors() {
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);
  
  const handleSearch = (searchParams) => {
    const filtered = doctorsData.filter((doctor) => {
      const specialtyMatch =
        !searchParams.specialty ||
        doctor.title.toLowerCase().includes(searchParams.specialty.toLowerCase());
      const locationMatch =
        !searchParams.location ||
        doctor.name.toLowerCase().includes(searchParams.location.toLowerCase());
      const availabilityMatch =
        !searchParams.availability ||
        doctor.availability.toLowerCase().includes(searchParams.availability.toLowerCase());
      return specialtyMatch && locationMatch && availabilityMatch;
    });
    setFilteredDoctors(filtered);
  }
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at MedEZ. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            img={doctor.img}
            name={doctor.name}
            title={doctor.title}
            stars={doctor.stars}
            reviews={doctor.reviews}
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
