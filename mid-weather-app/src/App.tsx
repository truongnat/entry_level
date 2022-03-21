import "./App.css";
import CountryInfo from "./components/CountryInfo";
import FormSearch from "./components/FormSearch";
import { WeatherCurrentInfo } from "./components/WeatherCurrentInfo";
import { WeatherProvider } from "./context/MainContext";

function App() {
  return (
    <WeatherProvider>
      <div className="mainContainer">
        <FormSearch />
        <CountryInfo />
        <WeatherCurrentInfo />
      </div>
    </WeatherProvider>
  );
}

export default App;
