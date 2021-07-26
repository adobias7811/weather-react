import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./img/icons/cloudy.svg";

function CurrentCondition(props) {
  return (
    <div className="clearfix weather-condition">
      <img src={icon} alt="weather icon" />
    </div>
  );
}

export default CurrentCondition;
