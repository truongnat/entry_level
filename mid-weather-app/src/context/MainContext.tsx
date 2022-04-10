import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { API_KEY } from '../config';
import api from '../config/api';
import {
  ICurrentCountryInfo,
  IFormSearch,
  IWeatherContext,
  UnitLetter,
  Units,
} from './types';

const initFormSearch = {
  loading: false,
  apiKey: API_KEY,
  unit: 'metric',
  unitLetter: '°C',
  country: '',
  lastLat: 0,
  lastLon: 0,
} as IFormSearch;

const initCountryInfo = {
  name: '',
  temp: '',
  visibility: '',
  description: '',
  feels_like: '',
  humidity: '',
  icon: '',
  lat: '',
  lon: '',
} as ICurrentCountryInfo;

export const WContext = createContext<IWeatherContext | null>(null);

export const WProvider: FC<ReactNode> = ({ children }) => {
  const [formSearch, setFormSearch] = useState<IFormSearch>({
    ...initFormSearch,
  });

  const [weatherInfo, setWeatherInfo] = useState<ICurrentCountryInfo>({
    ...initCountryInfo,
  });

  function _changeCountry(val: string) {
    setFormSearch({
      ...formSearch,
      country: val,
    });
  }

  function _toggleUnit() {
    const unitLetter =
      formSearch.unit === Units.metric ? UnitLetter.F : UnitLetter.C;

    const unit =
      formSearch.unit === Units.metric ? Units.imperial : Units.metric;

    setFormSearch({
      ...formSearch,
      unit,
      unitLetter,
    });

    _fetchCurrentWeather(unit, unitLetter).then((res) => {
      setWeatherInfo({
        ...weatherInfo,
        ...res,
      });
    });
  }

  async function _fetchCurrentWeather(unit: string, unitLetter: string) {
    try {
      const response = await api._apiWeather._getCurrentWeather({
        country: formSearch.country,
        units: unit,
        appid: formSearch.apiKey,
      });
      let iconId = response.weather[0].icon;

      const newCountryInfo = {
        name: response.name,
        description: response.weather[0].description,
        visibility: 'Visibility: ' + response.visibility / 1000 + 'Km',
        temp: response.main.temp + unitLetter,
        feels_like: 'Feels Like: ' + response.main.feels_like + unitLetter,
        humidity: 'Humidity: ' + response.main.humidity + '%',
        lat: response.coord.lat + ', ',
        lon: response.coord.lon,
        icon: api._apiWeather._getIconWeather(iconId),
      };
      return newCountryInfo;
    } catch (e) {
      // show toast
    }
  }

  async function _handleSearch() {
    _fetchCurrentWeather(formSearch.unit, formSearch.unitLetter).then((res) => {
      setWeatherInfo({
        ...weatherInfo,
        ...res,
      });
    });
  }

  return (
    <WContext.Provider
      value={{
        formSearch,
        weatherInfo,
        _toggleUnit,
        _handleSearch,
        _changeCountry,
      }}
    >
      {children}
    </WContext.Provider>
  );
};

export function useWP() {
  return useContext(WContext) as IWeatherContext;
}
