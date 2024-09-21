import React from "react";
import Button from "./Button";

const ColorPanel = ({ colorsArray, setColor }) => {
  return (
    <div className="h-15 w-[70vw] mx-auto mb-5 px-1 py-2 bg-white flex flex-wrap justify-evenly rounded-3xl">
      {colorsArray.map((colorObj) => (
        <Button
          key={colorObj.id}
          name={colorObj.name}
          textColor={colorObj.textColor}
          colorHex={colorObj.colorHex}
          setColor={setColor}
        />
      ))}
    </div>
  );
};

export default ColorPanel;
