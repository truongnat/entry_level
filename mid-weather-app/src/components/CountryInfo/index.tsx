import { useWP } from '../../context/MainContext';

export default function CountryInfo() {
  const { weatherInfo } = useWP();
  return (
    <section className='currentCountryInfo'>
      <p className='location'>
        <span id='name'>{weatherInfo.name}</span>
        {/* <span id="country">{weatherInfo.}</span> */}
      </p>
      <p className='coordinates'>
        <span id='lat'>{weatherInfo.lat}</span>
        <span id='lon'>{weatherInfo.lon}</span>
      </p>
    </section>
  );
}
