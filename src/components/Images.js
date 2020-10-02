import React, { useState, useEffect, useRef } from "react";
import Image from "./Image";

function Images() {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1533198801886-4cdbbc312542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1521435213950-8d3893133982?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1565266617019-0023f689a9c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=741&q=80",
    "https://images.unsplash.com/photo-1600867317504-3ea8cff32509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80",
  ]);
  const [url, seturl] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleAddImage(e) {
    if (url != "") {
      setImages([url, ...images]);
      seturl("");
    }
  }

  function handleRemove(index) {
    // setImages(images.filter((image, i) => i != index));
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function handleChange(event) {
    seturl(event.target.value);
    console.log(event.target.value);
  }

  function ShowImage() {
    return images.map((img, index) => (
      <Image
        image={img}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ));
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-2">
        <input
          type="text"
          ref={inputRef}
          value={url}
          onChange={handleChange}
          className="p-2 border border-gray-800 shadow rounded w-full h-12"
        />
        <button
          disabled={url == ""}
          className={`ml-5 p-2 text-white ${
            url != "" ? "bg-green-600" : "bg-green-300"
          }`}
          onClick={handleAddImage}
        >
          Add
        </button>
      </div>
    </section>
  );
}

export default Images;
