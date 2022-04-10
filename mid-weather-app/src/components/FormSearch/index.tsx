import React from 'react';
import { useWP } from '../../context/MainContext';

export default function FormSearch() {
  const { formSearch, _changeCountry, _toggleUnit, _handleSearch } = useWP();

  return (
    <section className='inputSection'>
      <div className='searchBar'>
        <input
          value={formSearch.country}
          className='inputField'
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            _changeCountry(e.currentTarget.value);
          }}
          type='text'
        />
        <button className='unitsBtn metric clickable' onClick={_toggleUnit}>
          {formSearch.unitLetter}
        </button>
        <button
          className='inputBtn metric clickable'
          type='button'
          onClick={_handleSearch}
        >
          Go
        </button>
      </div>
      <ul className='hidden suggestions'></ul>
    </section>
  );
}
