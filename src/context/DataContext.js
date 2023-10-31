// import React, { createContext, useContext, useState } from 'react';

// const DataContext = createContext();

// export function DataProvider({ children }) {
//   const [data, setData] = useState('');

//   return (
//     <DataContext.Provider value={{ data, setData }}>
//       {children}
//     </DataContext.Provider>
//   );
// }

// export function useData() {
//   return useContext(DataContext);
// }

// DataContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('myData'));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
