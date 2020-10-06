import React, { useRef } from "react";
import useTFimgPredict from "../utils/hooks/useTFimgPredict";

function Tensorflow() {
  const imageRef = useRef();
  const {predict, predictions, isLoading} = useTFimgPredict();

  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <h1 className="text-center">Tensorflow</h1>
        <img
          src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/lamborghini_660_140220101539.jpg"
          crossOrigin="anonymous"
          ref={imageRef}
        />
        <div className="text-center my-2">
          {predictions.length > 0 &&
            predictions.map((prediction) => (
              <div className="flex justify-between">
                <p>{prediction.className}</p>
                <p>{Math.floor(prediction.probability * 100)}%</p>
              </div>
            ))}

          <button
            className="p-2 rounded bg-blue-500 w-64"
            onClick={() => {
              predict(imageRef.current);
            }}
          >
            {isLoading && " ⏳"}
            {!isLoading && "Predict Result"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tensorflow;
