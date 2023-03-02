import { createContext } from 'react';

//1 crear contexto
export const FiltersContext = createContext();

// 2. crear el provider para proeveer el contexto
export function FiltersProvider({ children }) {
  return (
    <FiltersContext.Provider
      value={{
        category: 'all',
        minPrice: 0,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
