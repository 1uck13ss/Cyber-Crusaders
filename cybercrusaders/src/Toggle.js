import React, { useState } from "react";
import "./styles/Toggle.css";

const Toggle = ({ condition, name, type }) => {
  const [selectedFilter, setSelectedFilter] = useState(false);

  const handleClick = () => {
    condition(name, type);
    setSelectedFilter((prevState) => !prevState);
  };

  const buttonClassName = selectedFilter ? "selected" : "";

  return (
    <button onClick={handleClick} className={buttonClassName}>
      {name}
    </button>
  );
};

export default Toggle;
