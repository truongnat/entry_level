import { useWeather } from "../../context/MainContext";

export function WeatherCurrentInfo() {
  const { state } = useWeather();
  return (
    <section id="weatherCurrent">
      <div className="currentMain">
        <span id="temp">{state.currentCountryInfo.temp}</span>
        {state.currentCountryInfo.icon && (
          <img
            src={state.currentCountryInfo.icon}
            alt="Weather Icon"
            id="icon"
          />
        )}

        <span className="weatherDescription" id="description">
          {state.currentCountryInfo.description}
        </span>
      </div>
      <div className="currentData">
        <p>
          <span id="feels_like">{state.currentCountryInfo.feels_like}</span>
        </p>
        <p>
          <span id="visibility">{state.currentCountryInfo.visibility}</span>
        </p>
        <p>
          <span id="humidity">{state.currentCountryInfo.humidity}</span>
        </p>
      </div>
    </section>
  );
}
