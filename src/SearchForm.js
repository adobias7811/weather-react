import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchForm() {
  return (
    <div className="CityForm">
      <form id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="cityForm form-control search-inpput"
              id="city-input"
              placeholder="Enter a city..."
              autocomplete="off"
            />
          </div>
          <div className="col-3 p-0">
            <input
              type="submit"
              className="btn btn-primary btn-light searchButton w-100"
              value="Search 🔍"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
