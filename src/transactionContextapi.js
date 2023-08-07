// import { createContext, useState } from "react"

// import React from 'react'

// export const transactionContextapi = () => {

   
//     const transactions = [
//         {amount : 50 , desc : "book"},
//         {amount : 60 , desc : "Botel"},
//         {amount : 80 , desc : "Baike"},
//       ]
      




//   export const transactionContext = createContext(transactions)
// }

import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {

  const [data, setData] = useState([]);

  const updateData = (updatedData) => {
    setData(updatedData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };