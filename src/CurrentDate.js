import React from "react";

export default function CurrentDate() {
  return (
    <div className="currentDate">
      <ul>
        <li className="currentTemp weather-temperature">
          <span id="current-temp">78°</span>
          <span className="tempUnit">
            <a href="#" id="fahrenheit-link" class="active">
              F
            </a>
          </span>
        </li>
        <li className="weatherDescription" id="weather-description">
          Sunny
        </li>
        <li id="date">Sunday 6:00PM</li>
      </ul>
    </div>
  );
}
