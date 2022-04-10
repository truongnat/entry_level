import { DependencyList } from 'react';

export type UnitsType = 'imperial' | 'metric';
export type UnitLetterType = '°F' | '°C';

export enum UnitLetter {
  F = '°F',
  C = '°C',
}

export enum Units {
  imperial = 'imperial',
  metric = 'metric',
}

export const KeyActionTypes = {
  _changeUnit: '_changeUnit',
  _changeUnitLetter: '_changeUnitLetter',
  _changeCountry: '_changeCountry',
};

export type ParameterFn<T, R = T> = (args: T) => R;
export type ParameterFnToVoid<T> = (args: T) => void;

export type CbFn<T> = (fn: ParameterFnToVoid<T>, deps: DependencyList) => void;
export type FnOnChange<T = any> = (value: T) => void;
export type FnOnChangeNoParams = () => void;
export type FnPromise<T = any, R = T> = (args: T) => Promise<R>;
export type FnFetchWeather = (country?: string, unit?: string) => void;

export interface IWeatherContext {
  formSearch: IFormSearch;
  weatherInfo: ICurrentCountryInfo;
  _handleSearch: FnPromise;
  _changeCountry: FnOnChange;
  _toggleUnit: FnOnChangeNoParams;
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

export interface IFormSearch {
  apiKey: string;
  unit: UnitsType;
  unitLetter: UnitLetterType;
  lastLon: number;
  lastLat: number;
  country: string;
  loading: boolean;
}
