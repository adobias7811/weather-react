import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./img/icons/cloudy.svg";

export default function CurrentCondition() {
  return (
    <div className="clearfix weather-condition">
      <img src={icon} />
    </div>
  );
}
