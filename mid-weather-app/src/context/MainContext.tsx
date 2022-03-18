import {
  createContext,
  Reducer,
  ReducerAction,
  ReducerState,
  useCallback,
  useMemo,
  useReducer,
  useState,
} from "react";
import { API_KEY } from "../config";
import {
  IWeatherContext,
  IWeatherData,
  KeyActionTypes,
  ReactAction,
  UnitLetterType,
  UnitsType,
} from "./types";

export const initial = {
  apiKey: API_KEY,
  units: "metric",
  unitLetter: "°C",
  lastLon: 0,
  lastLat: 0,
  country: "",
} as IWeatherData;

export const WeatherContext = createContext({});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case KeyActionTypes._changeUnit:
      return { ...state, units: action.payload } as IWeatherData;
    case KeyActionTypes._changeUnitLetter:
      return { ...state, unitLetter: action.payload } as IWeatherData;
    case KeyActionTypes._changeCountry:
      return { ...state, country: action.payload } as IWeatherData;
  }
};

export const WeatherProvider = (props: { children: Element | any }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <WeatherContext.Provider value={[state, dispatch]}>
      {props.children}
    </WeatherContext.Provider>
  );
};
