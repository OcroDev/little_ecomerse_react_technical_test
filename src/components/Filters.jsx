import React, { useState, useId, useContext } from 'react';
import { useFilters } from '../hooks/useFilters';
import './Filters.css';

export const Filters = () => {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const minCategoryFilterId = useId();
  const { filters, setFilters: onChange } = useFilters();

  const handleChangeMinPrice = (event) => {
    onChange((prevState) => ({ ...prevState, minPrice: event.target.value }));
  };

  const handleChangeCategory = (event) => {
    //ESTO HUELE MAL
    onChange((prevState) => ({ ...prevState, category: event.target.value }));
  };

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de...</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={minCategoryFilterId}>Categoría</label>
        <select id={minCategoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  );
};
