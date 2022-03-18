import React from "react";

export default function WeatherCurrentInfo() {
  return (
    <section id="weatherCurrent">
      <div className="currentMain">
        <span id="temp"></span>
        <img src="" alt="Weather Icon" id="icon" />
        <span className="weatherDescription" id="description"></span>
      </div>
      <div className="currentData">
        <p>
          <span id="feels_like"></span>
        </p>
        <p>
          <span id="visibility"></span>
        </p>
        <p>
          <span id="humidity"></span>
        </p>
      </div>
    </section>
  );
}
