import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [list, setList] = useContext(MovieContext);
  console.log(list.name.length);
  return (
    <div className="nav">
      <h1>NAV</h1>
      <h2>N0: of items:</h2>
    </div>
  );
};

export default Nav;
