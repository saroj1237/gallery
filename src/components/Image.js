import React, { useState } from "react";

function Image({ index, handleRemove, image }) {
  const [ismouseEnter, setismouseEnter] = useState(false);

  return (
    <div className="p-1 border flex justify-center" key={index}>
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
      </div>
      <img className ="flex flex-wrap" src={image} />
    </div>
  );
}

export default Image;
