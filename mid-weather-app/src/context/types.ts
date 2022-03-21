import { DependencyList } from "react";

export type UnitsType = "imperial" | "metric";
export type UnitLetterType = "°F" | "°C";

export enum UnitLetter {
  F = "°F",
  C = "°C",
}

export enum Units {
  imperial = "imperial",
  metric = "metric",
}

export interface IWeatherData {
  apiKey: string;
  units: UnitsType;
  unitLetter: UnitLetterType;
  lastLon: number;
  lastLat: number;
  country: string;
  currentCountryInfo: ICurrentCountryInfo;
}

export type ActionTypes =
  | "_changeUnit"
  | "_changeUnitLetter"
  | "_changeCountry";

export interface ReactAction {
  type: ActionTypes;
  payload: string | number | Record<string, any>;
}

export type HooksWeatherReturn = {
  state: IWeatherData;
  dispatch: FnDispatch;
};

export type FnDispatch = (args: ReactAction) => void;

export const KeyActionTypes = {
  _changeUnit: "_changeUnit",
  _changeUnitLetter: "_changeUnitLetter",
  _changeCountry: "_changeCountry",
};

export type ParameterFn<T, R = T> = (args: T) => R;
export type ParameterFnToVoid<T> = (args: T) => void;

export type CbFn<T> = (fn: ParameterFnToVoid<T>, deps: DependencyList) => void;
export type FnOnChange<T = any> = (field: keyof IWeatherData, value: T) => void;
export type FnPromise<T = any, R = T> = (args: T) => Promise<R>;

export interface IWeatherContext {
  state: IWeatherData;
  _onChangeField: FnOnChange;
  _fetchCurrentWeather: FnPromise;
}

export interface ICurrentCountryInfo {
  name: string;
  description: string;
  visibility: string;
  temp: string;
  feels_like: string;
  humidity: string;
  lat: string | number;
  lon: string | number;
  icon: string;
}
