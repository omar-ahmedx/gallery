import React, { useState } from "react";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import Gallery from "./components/gallery";
function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Nav text={setText} />
      <Header text={setText} />
      <Gallery text={text} />
    </div>
  );
}

export default App;
