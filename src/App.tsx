import Peaks, { PeaksOptions } from "peaks.js";
import React, { useEffect } from "react";
import "./App.css";
import Samples from "./Samples";

const App: React.FC = () => {
  return (
    <div id="App">
      {Samples.map((each, index) => {
        return (
          <button onClick={() => each.controls.play()} key={index}>
            {each.fileinfo.filename}
          </button>
        );
      })}
    </div>
  );
};

export default App;
