import React from "react";

export default function WeatherDetails() {
  return (
    <div className="weatherDetails">
      <ul>
        <li>
          High <span id="high-temp">78°F </span>
        </li>
        <li>
          Low <span id="low-temp">72°F</span>
        </li>
        <li>
          Humidity <span id="humidity">15%</span>
        </li>
        <li>
          Wind <span id="wind-speed">10 mph</span>
        </li>
      </ul>
    </div>
  );
}
