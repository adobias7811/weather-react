import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentDate from "./CurrentDate";
import CurrentCondition from "./CurrentCondition";
import WeatherDetails from "./WeatherDetails";

function CurrentWeather(props) {
  return (
    <div className="row weatherInfo">
      <div className="col-sm-4">
        <CurrentCondition />
      </div>
      <div className="col-sm-4" id="city-name">
        <h3 className="city">{props.data.city}</h3>
        <ul className="date-time">
          <li id="description" class="weatherDescription">
            {props.data.description}
          </li>
          <li id="date">
            <CurrentDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="col-sm-4">
        <div className="weatherDetails">
          <ul>
            <li>
              High: <span id="wind">{props.data.high}</span> °F{" "}
            </li>
            <li>
              Low: <span id="wind">{props.data.low}</span> °F
            </li>
            <li>
              Humidity: <span id="humidity"> {props.data.humidity}</span> %
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
