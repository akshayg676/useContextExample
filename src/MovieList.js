import React, { useState } from "react";
import Movie from "./Movie";

function MovieList() {
  const [list, setList] = useState([
    {
      name: "HarryPotter",
      price: "$10",
      id: 12345,
    },
    {
      name: "Fast&Furious",
      price: "$15",
      id: 34525,
    },
    {
      name: "WWE",
      price: "$50",
      id: 98567,
    },
  ]);
  return (
    <div>
      {list.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
