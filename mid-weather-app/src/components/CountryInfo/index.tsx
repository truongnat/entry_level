import React from "react";

export default function CountryInfo() {
  return (
    <section className="currentCountryInfo">
      <img src="" alt="Country Flag" id="flag" />
      <p className="location">
        <span id="name"></span>
        <span id="country"></span>
      </p>
      <p className="coordinates">
        <span id="lat"></span>
        <span id="lon"></span>
      </p>
    </section>
  );
}
