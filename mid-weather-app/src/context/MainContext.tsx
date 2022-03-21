import { createContext, useContext, useState } from "react";
import { API_KEY, BASE_URL } from "../config";
import { ICurrentCountryInfo, IWeatherContext, IWeatherData } from "./types";

export const initial = {
  apiKey: API_KEY,
  units: "metric",
  unitLetter: "°C",
  country: "",
  lastLat: 0,
  lastLon: 0,
  currentCountryInfo: {
    name: "",
    temp: "",
    visibility: "",
    description: "",
    feels_like: "",
    humidity: "",
    icon: "",
    lat: "",
    lon: "",
  } as ICurrentCountryInfo,
} as IWeatherData;

export const WeatherContext = createContext<IWeatherData | {}>({});

export const WeatherProvider = (props: { children: Element | any }) => {
  const value = useCtxProvider();
  return (
    <WeatherContext.Provider value={value}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export function useWeather() {
  return useContext(WeatherContext) as IWeatherContext;
}

export function useCtxProvider(): IWeatherContext {
  const [state, setState] = useState<IWeatherData>({ ...initial });

  function _onChangeField<T>(field: keyof IWeatherData, value: T) {
    setState({
      ...state,
      [field]: value,
    });
  }

  async function _fetchCurrentWeather() {
    try {
      let fetcher = await fetch(
        `${BASE_URL}q=${state.country}&units=${state.units}&appid=${state.apiKey}`
      );

      if (fetcher.ok) {
        const weatherJson = await fetcher.json();
        console.log("show whe  : ", weatherJson);

        let iconId = weatherJson.weather[0].icon;
        _onChangeField<ICurrentCountryInfo>("currentCountryInfo", {
          name: weatherJson.name,
          description: weatherJson.weather[0].description,
          visibility: "Visibility: " + weatherJson.visibility / 1000 + "Km",
          temp: weatherJson.main.temp + state.unitLetter,
          feels_like:
            "Feels Like: " + weatherJson.main.feels_like + state.unitLetter,
          humidity: "Humidity: " + weatherJson.main.humidity + "%",
          lat: weatherJson.coord.lat + ", ",
          lon: weatherJson.coord.lon,
          icon: `https://openweathermap.org/img/wn/${iconId}@4x.png`,
        });
        await _fetchInfoByCode(weatherJson.sys.country);
      } else {
        // handle error
      }
    } catch (e) {
      console.log("logging e :", e);

      // show toast
    }
  }

  async function _fetchInfoByCode(code: string) {
    try {
      let fetcher = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );

      if (fetcher.ok) {
        let countryJson = await fetcher.json();

        console.log("show info by code : ", countryJson);
      } else {
        // handle else
      }
    } catch (e) {
      console.log("_fetchInfoByCode e:", e);
    }
  }

  return {
    _onChangeField,
    state,
    _fetchCurrentWeather,
  };
}
