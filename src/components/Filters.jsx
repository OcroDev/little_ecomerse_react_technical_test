import React, { useState, useId } from 'react';
import './Filters.css';

export const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const minCategoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    //aqui algo uele mal
    //dos fuentes de la verdad
    setMinPrice(event.target.value);
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
        />
        <span>${minPrice}</span>
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
