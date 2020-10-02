import React, { useState } from "react";

function Image({ index, handleRemove, image }) {
  const [ismouseEnter, setismouseEnter] = useState(false);

  return (
    <div className="w-1/4 flex justify-center my-4" key={index}>
      <div
        className="relative"
        onMouseEnter={() => {
          setismouseEnter(true);
        }}
        onMouseLeave={() => setismouseEnter(false)}
      >
        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-75 ${
            ismouseEnter ? "" : "hidden"
          } `}
          onClick={() => handleRemove(index)}
        ></i>
        <img src={image} />
      </div>
    </div>
  );
}

export default Image;
