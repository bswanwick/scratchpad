import { Howl } from "howler";
import React, { useEffect } from "react";
import "./App.css";
import AllSamples from "./utils/Samples";

const mySound1 = new Howl({
  src: [require("./samples/ambientpulse.wav")]
});
const mySound2 = new Howl({
  src: [require("./samples/basskick.wav")]
});
const mySound3 = new Howl({
  src: [require("./samples/clack.wav")]
});
const mySound4 = new Howl({
  src: [require("./samples/conga.wav")]
});
const mySound5 = new Howl({
  src: [require("./samples/pianochords.wav")]
});
const mySound6 = new Howl({
  src: [require("./samples/snare.wav")]
});
const mySound7 = new Howl({
  src: [require("./samples/woodblock.wav")]
});

const App: React.FC = () => {
  // Hook
  useEffect(() => {
    function handleKeyDown(ev: KeyboardEvent) {
      switch (ev.keyCode) {
        case 49:
          mySound2.play();
          break;
        case 50:
          mySound3.play();
          break;
        case 51:
          mySound6.play();
          break;
        case 52:
          mySound7.play();
          break;
        case 53:
          mySound1.play();
          break;
        case 54:
          mySound4.play();
          break;
        case 55:
          mySound5.play();
          break;
        default:
          console.log("Key not bound.", ev.keyCode);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div id="App">
      <button onClick={() => mySound2.play()}>basskick</button>
      <button onClick={() => mySound3.play()}>clack</button>
      <button onClick={() => mySound6.play()}>snare</button>
      <button onClick={() => mySound7.play()}>woodblock</button>
      <button onClick={() => mySound1.play()}>ambientpulse</button>
      <button onClick={() => mySound4.play()}>conga</button>
      <button onClick={() => mySound5.play()}>pianochords</button>
    </div>
  );
};

export default App;
