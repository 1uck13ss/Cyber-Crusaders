import React from "react";
import "./styles/Toggle.css";

const Toggle = ({ condition, name, type }) => {
  let selectedFilter = [];

  const handleClick = () => {
    selectedFilter = condition(name, type);
  };

  return (
    <button
      onClick={handleClick}
      className={selectedFilter.includes(name) ? "selected" : ""}
    >
      {name}
    </button>
  );
};

export default Toggle;
