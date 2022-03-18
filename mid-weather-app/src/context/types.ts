import { DependencyList } from "react";

export type UnitsType = "imperial" | "metric";
export type UnitLetterType = "°F" | "°C";

export interface IWeatherData {
  apiKey: string;
  units: UnitsType;
  unitLetter: UnitLetterType;
  lastLon: number;
  lastLat: number;
  country: string;
}

export type ActionTypes =
  | "_changeUnit"
  | "_changeUnitLetter"
  | "_changeCountry";

export interface ReactAction {
  type: keyof ActionTypes;
  payload: string | number | Record<string, any>;
}

export const KeyActionTypes = {
  _changeUnit: "_changeUnit",
  _changeUnitLetter: "_changeUnitLetter",
  _changeCountry: "_changeCountry",
};

export type ParameterFn<T, R = T> = (args: T) => R;
export type ParameterFnToVoid<T> = (args: T) => void;

export type CbFn<T> = (fn: ParameterFnToVoid<T>, deps: DependencyList) => void;

export interface IWeatherContext {
  value: IWeatherData;
  _changeUnit: CbFn<UnitsType>;
  _changeUnitLetter: CbFn<UnitLetterType>;
  _changeCountry: CbFn<string>;
}
