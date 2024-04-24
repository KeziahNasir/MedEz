import React from "react";
import { FaCircleChevronDown } from "react-icons/fa6";

function SolutionStep(props) {
  return (
    <div className="about-text-step">
      <p className="about-text-sTitle">
        <span>
          <FaCircleChevronDown/>{" "}
          {props.title}
        </span>
      </p>
      <p className="about-text-description">{props.description}</p>
    </div>
  );
}

export default SolutionStep;