import React from "react";

const Button = ({ name, textColor, colorHex, setColor }) => {
  const style = {
    color: textColor,
    backgroundColor: colorHex,
  };

  const handleClick = (e) => {
    console.log(setColor(e.target.innerText));
  };

  return (
    <button
      className={`mx-1 my-1 px-5 py-2 rounded-full drop-shadow-md`}
      style={style}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
