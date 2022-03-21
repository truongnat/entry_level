import { useWeather } from "../../context/MainContext";
import { UnitLetter } from "../../context/types";

export default function FormSearch() {
  const { state, _onChangeField, _fetchCurrentWeather } = useWeather();

  function toggleUnit() {
    if (state.unitLetter === "°C") {
      _onChangeField("unitLetter", UnitLetter.F);
    } else {
      _onChangeField("unitLetter", UnitLetter.C);
    }
  }

  return (
    <section className="inputSection">
      <div className="searchBar">
        <input
          value={state.country}
          className="inputField"
          onChange={(e) => {
            _onChangeField("country", e.target.value);
          }}
          id="userInputField"
          type="text"
        />
        <button className="unitsBtn metric clickable" onClick={toggleUnit}>
          {state.unitLetter}
        </button>
        <button
          className="inputBtn metric clickable"
          type="button"
          onClick={_fetchCurrentWeather}
        >
          Go
        </button>
      </div>
      <ul id="suggestions" className="hidden suggestions"></ul>
    </section>
  );
}
