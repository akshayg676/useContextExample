import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [list, setList] = useState([
    {
      name: "HarryPotter",
      price: "$10",
      id: 12345,
    },
    {
      name: "Fast&Furious",
      price: "$15",
      id: 3455,
    },
    {
      name: "WWE",
      price: "$50",
      id: 985,
    },
  ]);
  return (
    <MovieContext.Provider value={[list, setList]}>
      {props.children}
    </MovieContext.Provider>
  );
};
