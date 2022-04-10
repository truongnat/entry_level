import { BASE_URL } from '.';

export type CurrentWeatherParams = {
  country: string;
  units: string;
  appid: string;
};

class WeatherApi {
  _getCurrentWeather({ appid, country, units }: CurrentWeatherParams) {
    return fetch(`${BASE_URL}q=${country}&units=${units}&appid=${appid}`)
      .then((res) => {
        return res.json();
      })
      .catch((e) => {
        alert(e.message);
        return e;
      });
  }

  _getIconWeather(code: string) {
    return `https://openweathermap.org/img/wn/${code}@4x.png`;
  }
}

class Api {
  public _apiWeather: WeatherApi;

  constructor() {
    this._apiWeather = new WeatherApi();
  }
}

export default new Api();
