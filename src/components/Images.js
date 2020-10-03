import React, { useState, useRef } from "react";
import Image from "./Image";
import useFetchImage from "../utils/hooks/useFetchImage";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";

function Images() {
  const [page, setpage] = useState(1);
  const [searchItem, setsearchItem] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchItem
  );

  function handleRemove(index) {
    // setImages(images.filter((image, i) => i != index));
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function ShowImage() {
    return (
      <InfiniteScroll
        dataLength={images.length}
        next={() => setpage(page + 1)}
        hasMore={true}
        className="flex flex-wrap w-1/3"
      >
        {images.map((img, index) => (
          <Image
          className = ''
            image={img.urls.regular}
            handleRemove={handleRemove}
            index={index}
            key={index}
          />
        ))}
      </InfiniteScroll>
    );
  }

  const debounce = useDebounce();

  function handleChange(e) {
    const text = e.target.value;
    debounce(() => {
      setsearchItem(text);
    });
  }

  return (
    <section>
      <div className="my-5 w-full">
        <input
          placeholder="search photo here"
          className="p-2 rounded w-full border shadow "
          type="text"
          onChange={handleChange}
        />
      </div>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}

      <ShowImage />

      {isLoading && <Loading />}
    </section>
  );
}

export default Images;
