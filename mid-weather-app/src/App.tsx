import "./App.css";
import CountryInfo from "./components/CountryInfo";
import FormSearch from "./components/FormSearch";
import WeatherCurrentInfo from "./components/WeatherCurrentInfo";

function App() {
  return (
    <div className="mainContainer">
      <FormSearch />
      <CountryInfo />
      <WeatherCurrentInfo />
    </div>
  );
}

export default App;
