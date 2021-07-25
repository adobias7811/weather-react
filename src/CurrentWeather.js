import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import CurrentCondition from "./CurrentCondition";
import CurrentDate from "./CurrentDate";
import WeatherDetails from "./WeatherDetails";

export default function CurrentWeather(props) {
  return (
    <div className="row weatherInfo">
      <div className="col-sm-4">
        <CurrentCondition />
      </div>
      <div className="col-sm-4">
        <CurrentDate />
      </div>
      <div className="col-sm-4">
        <WeatherDetails />
      </div>
    </div>
  );
}
