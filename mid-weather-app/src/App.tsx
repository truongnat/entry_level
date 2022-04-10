import './App.css';
import CountryInfo from './components/CountryInfo';
import FormSearch from './components/FormSearch';
import { WeatherCurrentInfo } from './components/WeatherCurrentInfo';
import { WProvider } from './context/MainContext';

function App() {
  return (
    <WProvider>
      <div className='mainContainer'>
        <FormSearch />
        <CountryInfo />
        <WeatherCurrentInfo />
      </div>
    </WProvider>
  );
}

export default App;
