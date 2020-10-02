import React, { useState } from "react";
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = useState("hello world ");

  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className="text-center">
          <div className="border py-5 w-full">Hello React</div>
          <Images />
        </div>
      </div>
    </section>
  );
}

export default App;
