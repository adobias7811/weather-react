import React from "react";
import WeatherIcon from "./CurrentCondition";

function ForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°F`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°F`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={48} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemp()}</span>{" "}
        <span className="forecast-temperature-min">{minTemp()}</span>{" "}
      </div>
    </div>
  );
}

export default ForecastDay;
