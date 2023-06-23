import React, { useState } from "react";
import "./styles/Toggle.css";

const Toggle = ({ condition, name }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    condition(name, toggle);
    setToggle(!toggle);
  };

  return <button onClick={handleClick}>{name}</button>;
};

export default Toggle;
