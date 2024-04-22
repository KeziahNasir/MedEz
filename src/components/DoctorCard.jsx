import React from "react";
import { FaStar } from "react-icons/fa";

function DoctorCard({img, name, title, reviews,stars}) {
  return (
    <div className="dt-card">
      <img src={img} alt={name} className="dt-card-img" />
      <p className="dt-card-name">{name}</p>
      <p className="dt-card-title">{title}</p>
      <p className="dt-card-stars">
        <FaStar className="b-[F7BB50#] pr-[6px]" />
        {stars}
        <span className="dt-card-reviews"> ({reviews}+ Reviews)</span>
      </p>
    </div>
  );
}

export default DoctorCard;
