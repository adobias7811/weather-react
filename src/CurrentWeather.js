import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentCondition from "./CurrentCondition";
import CurrentCity from "./CurrentCity";
import CurrentDate from "./CurrentDate";
import WeatherDetails from "./WeatherDetails";

export default function CurrentWeather() {
  return (
    <div className="row weatherInfo">
      <div className="col-sm-4">
        <CurrentCondition />
      </div>
      <div className="col-sm-4">
        <CurrentCity />
        <CurrentDate />
      </div>
      <div className="col-sm-4">
        <WeatherDetails />
      </div>
    </div>
  );
}
