import { useWP } from '../../context/MainContext';

export function WeatherCurrentInfo() {
  const { weatherInfo } = useWP();
  return (
    <section id='weatherCurrent'>
      <div className='currentMain'>
        <span id='temp'>{weatherInfo.temp}</span>
        {weatherInfo.icon && (
          <img src={weatherInfo.icon} alt='Weather Icon' id='icon' />
        )}

        <span className='weatherDescription' id='description'>
          {weatherInfo.description}
        </span>
      </div>
      <div className='currentData'>
        <p>
          <span id='feels_like'>{weatherInfo.feels_like}</span>
        </p>
        <p>
          <span id='visibility'>{weatherInfo.visibility}</span>
        </p>
        <p>
          <span id='humidity'>{weatherInfo.humidity}</span>
        </p>
      </div>
    </section>
  );
}
