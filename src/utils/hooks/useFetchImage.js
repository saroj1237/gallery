import Axios from "axios";
import React, { useEffect, useState } from "react";

const URL = process.env.REACT_APP_UNSPLASH_URL;
const KEY = process.env.REACT_APP_UNSPLASH_KEY;

function useFetchImage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Axios.get(`${URL}?client_id=${KEY}`).then((res) => {
      setImages(res.data);
      console.log(process.env);
      console.log(res.data);
    });
  }, []);

  return [images, setImages];
}

export default useFetchImage;
