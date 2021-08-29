import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [list, setList] = useContext(MovieContext);
  return (
    <div className="nav">
      <h1>NAV</h1>
      <h2>N0: of items: {list.length}</h2>
    </div>
  );
};

export default Nav;
