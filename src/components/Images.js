import React, { useState, useEffect, useRef } from "react";
import Image from "./Image";
import useFetchImage from "../utils/hooks/useFetchImage";

function Images() {

  const [url, seturl] = useState("");
  const [images,setImages] = useFetchImage()

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
        image={img.urls.regular}
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
