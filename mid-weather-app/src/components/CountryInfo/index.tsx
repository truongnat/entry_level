import { useWeather } from "../../context/MainContext";

export default function CountryInfo() {
  const { state } = useWeather();
  return (
    <section className="currentCountryInfo">
      <p className="location">
        <span id="name">{state.currentCountryInfo.name}</span>
        {/* <span id="country">{state.currentCountryInfo.}</span> */}
      </p>
      <p className="coordinates">
        <span id="lat">{state.currentCountryInfo.lat}</span>
        <span id="lon">{state.currentCountryInfo.lon}</span>
      </p>
    </section>
  );
}
