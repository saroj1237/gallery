import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";
import { useState } from "react";

function useTFimgPredict() {
  const [isLoading, setisLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);


  function predict(img) {
    setisLoading(true);
    // const img = imageRef.current;

    mobilenet.load().then((model) => {
      model.classify(img).then((predictions) => {
        setPredictions(predictions);
        setisLoading(false);
      });
    });
  }
  return {predict, predictions, setPredictions, isLoading};
}

export default useTFimgPredict;
